import StarRatings from 'react-star-ratings';
export default function HotelCards({ hotel }) {
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
                            <h7 className="card-subtitle mb-2 text-primary">{hotel.address}; {hotel.city}</h7>
                            <p className="card-text text-secondary">Standard Twin Room</p>


                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center gap-2">
                        <div className="card-body d-flex flex-column align-items-end">
                            <div className="mb-3">
                                <StarRatings
                                    rating={hotel.hotel_class}
                                    starRatedColor="rgb(230, 67, 47)"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                            </div>
                            <h8><b>Rp250.000</b></h8>
                            <p>Include taxes and fees</p>
                            <button className="btn btn-sm btn-primary">Book Now &gt; </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}