const { Hotel } = require("../models");

module.exports = class BookingOrder{
    static async getAllHotels(req, res, next) {
        try {
          const myBookings = await BookingOrder.findAll();
          res.status(200).json(myBookings);
        } catch (error) {
          next(error);
        }
      }
    
      static async getHotelById(req, res, next) {
        try {
          const { id } = req.params;
          const hotel = await BookingOrder.findOne({
            where: { id },
          });
          if (!hotel) {
            throw { name: "NotFound", message: `Hotel with id ${id} not found.` };
          }
    
          res.status(200).json(hotel);
        } catch (error) {
          next(error);
        }
      }
}