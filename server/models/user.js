'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.BookingOrder,{
        foreignKey: 'UserId',
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exist'
      },
      validate:{
        notNull: {
          msg: 'Email is required'
        },
        notEmpty:{
          args: true,
          msg: 'Email is required'
        },
        isEmail: {
          args: true,
          msg: 'Email should be in Email format'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password is required'
        },
        notEmpty:{
          args: true,
          msg: 'Password is required'
        },
        len: {
          args: [5],
          msg: 'Password length should be minimum 5'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    user.password = hashPassword(user.password)
  });
  return User;
};