import { useEffect, useState } from "react"
import HotelCards from "../components/HotelCards"//
//import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Filter from "../components/Filter";
import Footer from "../components/Footer";

import {
    useSelector, // untuk ngambil data dari store
    useDispatch // untuk trigger event => mempengaruhi data di store
} from "react-redux"

import {fetchHotel} from "../features/hotels/fetchHotelSlice"


export default function Home() {
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const h = useSelector(store => store.hotel.hotels)

    const dispatch = useDispatch()

    const fetchData = async () => { //diambil dari slicer
        dispatch(fetchHotel())
    };

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {console.log({h})}, [h])

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
                   <Filter/>
                    <div className="col-sm-8 flex-fill ">
                        
                        {h.map((hotel) => {
                            return <HotelCards key={hotel.hotel_id} hotel={hotel} />
                        })}
                    </div>
                </div>
            </div>
                        <Footer/>
        </>

    )
}