import { useEffect, useState } from "react"
import HotelCards from "../components/HotelCards"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function MyBookings() {
    const [hotels, setHotels] = useState([])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const fetchData = async () => {
        try {
            let { data } = await axios.get('https://booking-com.p.rapidapi.com/v1/static/hotels?country=id', {
                params: { locale: 'id' },
                headers: {
                    'x-rapidapi-key': 'ac01d2dcb6mshae952bdb1a61dc8p1bd38ejsn00900591bab4',
                    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
                    'Content-Type': 'application/json'
                }
            })
            // let hotels = data.result 
            // console.log(hotels[0])
            // setHotels(hotels)
          
        } catch (error) {
            console.log(error.response)
        }

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="container mt-4">
                <h3>Booking</h3>
                <div className="col-sm-8 flex-fill ">
                    
                {hotels.length}
                {/* {hotels[0]} */}
                    {/* <HotelCards key={hotels[0]} hotels={hotels[0]}/> */}

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