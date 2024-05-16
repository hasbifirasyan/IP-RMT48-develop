'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingOrder.init({
    HotelId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    checkinDate: DataTypes.DATE,
    checkoutDate: DataTypes.DATE,
    paymentStatus: DataTypes.BOOLEAN,
    adultsNumber: DataTypes.INTEGER,
    roomNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookingOrder',
  });
  return BookingOrder;
};