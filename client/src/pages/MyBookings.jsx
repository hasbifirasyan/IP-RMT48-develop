import { useEffect, useState } from "react"
import HotelCards from "../components/HotelCards"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HotelCardBooked from "../components/HotelCardBooked";


export default function MyBookings() {
    
    const [hotels, setHotels] = useState([])
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const fetchData = async () => {
        try {
            let data = await axios.get('http://localhost:3000/hotels', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            let hotels = data.data.hotels
            console.log({ hotels })
            setHotels(hotels)
          
        } catch (error) {
            console.log(error.response)
        }

    }
    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <>
            <div className="container mt-4">
                <h3>My Bookings</h3>
                <div className="col-sm-8 flex-fill ">
                    <HotelCardBooked />
                {/* {hotels.length} */}
                {/* {hotels[0]} */}
                    {/* <HotelCards key={hotels[0]} hotels={hotels[0]}/> */}

                </div>
            </div>
           
        </>

    )
}