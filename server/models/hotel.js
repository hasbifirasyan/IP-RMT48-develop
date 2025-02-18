'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.hasMany(models.BookingOrder,{
        foreignKey: 'HotelId',
      })
    }
  }
  Hotel.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Hotel name is required",
        },
        notEmpty: {
          args: true,
          msg: "Hotel name is required",
        },
      },
    },
    price: DataTypes.INTEGER,
    hotelClass: DataTypes.INTEGER,
    address: DataTypes.STRING,
    numberOfRoom: DataTypes.INTEGER,
    hotelDescription: DataTypes.STRING,
    hotelFacilities: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};