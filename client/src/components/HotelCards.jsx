import StarRatings from 'react-star-ratings';
import { Link } from "react-router-dom";
import { useState } from 'react';
export default function HotelCards({ hotel }) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [hotelClass, setHotelClass] = useState()
    const [HotelId, setHotelId] = useState('')

    const handleOnBooking = (event) => {
        event.preventDefault()
    }
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-3 d-flex">
                        <img
                            src="https://th.bing.com/th/id/OIP.-wcXcPg9mUaWmMJuoWXgHgHaE8?rs=1&pid=ImgDetMain"
                            className="img-fluid rounded-start"
                            alt="hotel"
                            style={{ width: "100%", height: "auto", borderRadius: 10, maxWidth: 200 }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title">{hotel.name}</h3>
                            <h6 className="card-subtitle mb-2 text-primary">{hotel.address}; {hotel.city}</h6>
                            <p className="card-text text-secondary">*Picture is just an illustration. We already curate the best hotel and give you surprise!</p>


                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center gap-2">
                        <div className="card-body d-flex flex-column align-items-end">
                            <div className="mb-3">

                                <StarRatings
                                    rating={hotel.hotelClass}
                                    starRatedColor="rgb(230, 67, 47)"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </div>
                            <h4><b>Rp212.000</b></h4>
                            <p>Include taxes and fees</p>
                            <button onClick={handleOnBooking} className="btn btn-sm btn-primary">Book Now &gt; </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}