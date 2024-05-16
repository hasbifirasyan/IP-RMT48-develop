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
      BookingOrder.belongsTo(models.Hotel, {
        foreignKey: "HotelId",
      });
      BookingOrder.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  BookingOrder.init({
    HotelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "HotelId is required",
          },
          notEmpty: {
            args: true,
            msg: "HotelId is required",
          },
        },
      },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "UserId is required",
          },
          notEmpty: {
            args: true,
            msg: "UserId is required",
          },
        },
      },
    checkinDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "checkinDate is required",
        },
        notEmpty: {
          args: true,
          msg: "checkinDate is required",
        },
      },
    },
    checkoutDate:  {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "checkoutDate is required",
        },
        notEmpty: {
          args: true,
          msg: "checkoutDate is required",
        },
      },
    },
    paymentStatus: DataTypes.BOOLEAN,
    adultsNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "adultsNumber is required",
          },
          notEmpty: {
            args: true,
            msg: "adultsNumber is required",
          },
        },
      },
    roomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "roomNumber is required",
          },
          notEmpty: {
            args: true,
            msg: "roomNumber is required",
          },
        },
      },  }, {
    sequelize,
    modelName: 'BookingOrder',
  });
  return BookingOrder;
};