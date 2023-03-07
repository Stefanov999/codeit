'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(35),
        unique: true
      },
      gender: {
        type: Sequelize.STRING(15)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(20),
        default: 'user'
      },
      nick: {
        allowNull: false,
        type: Sequelize.STRING(25)
      }
    });

    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(70)
      },
      author: {
        type: Sequelize.STRING(70)
      },
      img: {
        type: Sequelize.STRING
      },
      article: {
        type: Sequelize.STRING(5000)
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};
