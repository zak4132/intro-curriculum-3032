'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/secret_board',
  { logging: false });
const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  Programming: {
    type: Sequelize.STRING
  },
  Language: {
    type: Sequelize.STRING
  },
  Communication: {
    type: Sequelize.STRING
  },
  Experience: {
    type: Sequelize.STRING
  },
  Judgement: {
    type: Sequelize.STRING
  },
  postedBy: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
    freezeTableName: true,
    timestamps: true
  });

Post.sync();
module.exports = Post;