# codeit
This Project is made with Node Js + express + React Js + PostgreSQL
To Start :
1) git clone https://github.com/Stefanov999/codeit.git
2) npm install
3) Please check files db.js and config.json and adjust them in order to connect to you local Postgre server.
4) npm run migrate   (to create tables)
5) npm run seed      (to put some starting data)
6) node server.js    (npm run dev  :  for development)
7) App will run on    http://localhost:3001    

8 username : codeit@gmail.com  // pass : codeit  


--------
The App :

authentication and api protection : json web token .

type of users:
1) user : cannot do anything .
2) admin : have access to admin panel .
3) SuperAdmin : can promote user and admin and have access to admin panel .

From Admin panel you can create pages with images for your public view.
On the public view click on one of the boxes and react will generate new page with article.

if you cannot find the admin panel : you have to log in as a admin or SuperAdmin and click on the Profile.

I also included some some Image Manager where you can see the Images size / download them and history of your actions.



