const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const catchAsync = require('./../utils/catchAsync');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/appError');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

exports.signUp = catchAsync(async (req, res, next) => {
  const { email, password, nick, gender } = req.body;

  if (email.length > 70 || nick.length > 70) {
    return;
  }

  pool.query(
    'SELECT * FROM public.user WHERE email= $1',
    [email],
    async (error, result) => {
      if (error) {
        return;
      }

      if (result.rows.length) {
        res.status(200).json({
          status: 'success',
          data: {
            msg: 'Email already Exists'
          }
        });
        return;
      }

      let hashedPassword = await bcrypt.hash(password, 10);

      pool.query(
        'INSERT INTO public.user (email,password,nick,role,gender) VALUES ($1,$2,$3,$4,$5)',
        [email, hashedPassword, nick, 'user', gender],
        (error, result) => {
          if (error) {
            return;
          }
        }
      );
      const token = signToken(email);
      const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EPXIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true ///For more secure true
      };

      res.cookie('jwt', token, cookieOptions);
      res.status(201).json({
        status: 'success',
        token,
        data: {
          user: { email: email, password: password, nick: nick, role: 'user' },
          msg: 'Success'
        }
      });
    }
  );
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  let user;
  ///Check if email and passwords exists
  if (!email || !password) {
    return;
  }

  /// Check if user exists and password is correct
  pool.query(
    'SELECT * FROM public.user WHERE email= $1',
    [email],
    async (error, result) => {
      if (error) {
        return;
      } else {
        user = await result.rows[0];
      }

      if (!user || !(await correctPassword(password, user.password))) {
        res.status(200).json({
          status: 'Not OK',
          message: 'Incorect email or password'
        });
        return;
      }
      /// if all ok send token
      const token = signToken(email);

      const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EPXIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true //For more secure set to true
      };

      res.cookie('jwt', token, cookieOptions);
      res.status(200).json({
        status: 'Success',
        token: token,
        message: 'Success',
        data: user
      });
    }
  );
});

exports.jwtCheck = catchAsync(async (req, res, next) => {
  let token = req.cookies['jwt'];
  if (!token) {
    res.status(200).json({
      user: 'Anonymous'
    });
    return;
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    pool.query(
      'SELECT * FROM public.user WHERE email= $1',
      [decoded.id],
      async (error, result) => {
        if (error) {
          return;
        } else {
          res.status(200).json({
            email: result.rows[0].email,
            role: result.rows[0].role,
            token: token,
            nick: result.rows[0].nick
          });
        }
      }
    );
  } catch {
    res.status(200).json({
      user: 'Anonymous'
    });
  }
});

exports.logOut = catchAsync(async (req, res, next) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EPXIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true //For more secure set to true
  };
  res.cookie('jwt', 'logged out', cookieOptions);
  res.end();
});
/////////////// Protection of the API
exports.protect = catchAsync(async (req, res, next) => {
  //1) Get Token and check if it exist
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('you are not logged in'));
  }

  //2) Validate the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  pool.query(
    'SELECT * FROM public.user WHERE email= $1',
    [decoded.id],
    async (error, result) => {
      if (error) {
        return;
      } else {
        const freshUser = await result.rows[0];
        req.user = freshUser;
        next();
      }
    }
  );
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('you do not have permission to perform this action', 403)
      );
    }
    next();
  };
};
