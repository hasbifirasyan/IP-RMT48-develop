const { Hotel } = require("../models");

module.exports = class HotelController{
    static async getAllHotels(req, res, next) {
        try {
          const hotels = await Hotel.findAll();
          res.status(200).json(hotels);
        } catch (error) {
          next(error);
        }
      }
    
      static async getHotelById(req, res, next) {
        try {
          const { id } = req.params;
          const hotel = await Hotel.findOne({
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