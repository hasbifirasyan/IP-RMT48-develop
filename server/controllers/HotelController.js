const axios = require("axios");
const { Hotel } = require("../models");

module.exports = class HotelController {
  static async getAllHotels(req, res, next) {
    try {
      let { data } = await axios.get(
        "https://booking-com.p.rapidapi.com/v2/hotels/search",
        {
          params: {
            units: "metric",
            room_number: "1",
            order_by: "popularity",
            checkout_date: "2024-05-20",
            adults_number: "2",
            dest_id: "99",
            dest_type: "country",
            checkin_date: "2024-05-19",
            filter_by_currency: "IDR",
            locale: "id",
            page_number: "0",
            include_adjacency: "true",
          },
          headers: {
            "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
            "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
            "Content-Type": "application/json",
          },
        }
      );

      const hotels = data.results.map((hotel) => {
        return {
          id: "rapidAPI-" + hotel.id,
          name: hotel.name,
          price: hotel.priceBreakdown.grossPrice.value,
          hotelClass: hotel.propertyClass,
         
          // numberOfRoom: hotel.number_of_rooms,
          // hotelDescription: hotel.hotel_description,
          // hotelFacilities: "Restaurant",
          imageUrl: hotel.photoMainUrl,
          // CityId: hotel.city_id,
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
