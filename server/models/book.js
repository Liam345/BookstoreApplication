'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
    }, {});

  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};