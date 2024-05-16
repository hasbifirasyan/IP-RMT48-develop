import { useEffect, useState } from "react"
import HotelCards from "../components/HotelCards"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Home() {
    const [hotels, setHotels] = useState([])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    const fetchData = async () => {
        try {
            let {data} = await axios.get('https://booking-com.p.rapidapi.com/v1/static/hotels?country=id', {
                params: { locale: 'id' },
                headers: {
                    'x-rapidapi-key': 'ac01d2dcb6mshae952bdb1a61dc8p1bd38ejsn00900591bab4',
                    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
                    'Content-Type': 'application/json'
                }
            })
            let hotels = data.result
            setHotels(hotels)
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    // const handleOnSubmit = async (event) => {
    //     try {
            
    //     } catch (error) {
    //         console.log(error.response)
    //     }
    // }

    return (
        <>
            <div className="pt-5 pb-3 px-5 bg-primary">
                <h1 className="text-white">Let`s Check in Today</h1>
                <p className="text-white pb-4">Search for available hotel today</p>
                <div className="search-bar bg-warning p-1 mx-5 rounded">
                    <form className="d-flex" >
                        <input
                            className="form-control me-1"
                            type="search"
                            placeholder="Where are you going?"
                            aria-label="Search"
                        />
                        <div className="d-flex flex-wrap me-1">
                            <DatePicker className="form-control mb-1"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                placeholderText="Check-in Date"
                            />
                            <DatePicker className="form-control"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                placeholderText="Check-out Date"
                            />
                        </div>

                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary text-white" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-2 rounded bg-warning">
                        <div className="pt-2 m-auto">
                            <h2>Filter</h2>
                            <label htmlFor="">By Hotel Class:</label>
                            <form className="d-flex flex-column gap-2">
                                
                                    <div className="mx-2">
                                        <input type="checkbox" name="filter" />
                                        <label className="mx-2" htmlFor="filter">5 stars</label>
                                    </div>
                                    <div className="mx-2">
                                        <input type="checkbox" name="filter" />
                                        <label className="mx-2" htmlFor="filter">4 stars</label>
                                    </div>
                                    <div className="mx-2">
                                        <input type="checkbox" name="filter" />
                                        <label className="mx-2" htmlFor="filter">&le; 3 stars</label>
                                    </div>

                       


                                    <button className="btn btn-primary">Filter</button>
                                    
                             
                            </form>
                        </div>
                        <hr className="d-sm-none" />
                    </div>

                    <div className="col-sm-8 flex-fill ">
                        {hotels.length}
                        {hotels.map((hotel)=> {
                            return <HotelCards key={hotel.hotel_id} hotel={hotel} />
                        })}
                    </div>
                </div>
            </div>

            <div
                id="section1"
                className="container-fluid gap-4"
                style={{ padding: "100px 20px" }}
            >
                <h1>Section 1</h1>

            </div>
            <div
                id="section2"
                className="container-fluid "
                style={{ padding: "100px 20px" }}
            >
                <h1>Section 2</h1>
                <p>
                    Try to scroll this section and look at the navigation bar while scrolling!
                    Try to scroll this section and look at the navigation bar while scrolling!
                </p>
                <p>
                    Try to scroll this section and look at the navigation bar while scrolling!
                    Try to scroll this section and look at the navigation bar while scrolling!
                </p>
            </div>
            <div
                id="section3"
                className="container-fluid bg-secondary text-white"
                style={{ padding: "100px 20px" }}
            >
                <h1>Section 3</h1>
                <p>
                    Try to scroll this section and look at the navigation bar while scrolling!
                    Try to scroll this section and look at the navigation bar while scrolling!
                </p>
                <p>
                    Try to scroll this section and look at the navigation bar while scrolling!
                    Try to scroll this section and look at the navigation bar while scrolling!
                </p>
            </div>
        </>

    )
}