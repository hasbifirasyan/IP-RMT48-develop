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

  static async generateXenditToken(req, res, next) {
    try {
      const authToken = Buffer.from(`${process.env.XENDIT_SECRET_KEY}:`).toString(
        "base64"
      );
      const customer = req.user;
      const { data, status } = await axios.post(
        "https://api.xendit.co/v2/invoices",
        {
          external_id: "xendit_test_id_1",
          amount: 212000,
          currency: "IDR",
          customer: {
            given_names: customer.name,
            email: customer.email,
          },
          customer_notification_preference: {
            invoice_paid: ["email"],
          },
          success_redirect_url: "http://localhost:3000/",
          failure_redirect_url: "http://localhost:3000/",
        },
        {
          headers: {
            Authorization: `Basic ${authToken}`,
          },
        }
      );
      console.log(`Response returned with a status of ${status}`);
      const { invoice_url } = data;
      console.log(`Invoice created! Visit ${invoice_url} to complete payment`);
      res.status(200).json({invoice_url})
    } catch (error) {
      console.log(error,`<<generate`)
      next(error);
    }
  }

  static async XenditReceiveCallback(req, res, next) {
    try {
      const { body } = req;
          if (body.status === "PAID") {
            console.log(
              `Invoice successfully paid with status ${body.status} and id ${body.id}`
            );
            res.sendStatus(200).end()
          }
    } catch (error) {
      console.log(error,`<<callback`)
      next(error);
    }
  }


};
