const axios = require("axios");
const { Hotel } = require("../models");

module.exports = class HotelController {
  static async getAllHotels(req, res, next) {
    try {
      let { data } = await axios.get(
        "https://booking-com.p.rapidapi.com/v1/static/hotels?country=id",
        {
          headers: {
            "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
            "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
            "Content-Type": "application/json",
          },
        }
      );

      const hotels = data.result.map((hotel) => {
        return {
          id: "rapidAPI-" + hotel.hotel_id,
          name: hotel.name,
          price: 212000,
          hotelClass: hotel.hotel_class,
          city: hotel.city,
          address: hotel.address,
          numberOfRoom: hotel.number_of_rooms,
          hotelDescription: hotel.hotel_description,
          hotelFacilities: "Restaurant, Parking",
          // imageUrl: hotel.photoMainUrl,
       
        };
      });
      console.log({ hotels });
      res.status(200).json({ hotels });
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
};
