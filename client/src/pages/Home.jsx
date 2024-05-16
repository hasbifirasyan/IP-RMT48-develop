import { useEffect, useState } from "react"
import HotelCards from "../components/HotelCards"
import axios from 'axios'

export default function Home() {
    const [hotel, setHotel] = useState([])

    const fetchData = async () => {
        try {
            let { data } = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/reviews', {
                params: { locale: 'en-gb' },
                headers: {
                    'x-rapidapi-key': 'ac01d2dcb6mshae952bdb1a61dc8p1bd38ejsn00900591bab4',
                    'x-rapidapi-host': 'booking-com.p.rapidapi.com',
                    'Content-Type': 'application/json'
                }
            })
            console.log({ data }, `<<<data`)
            setHotel(data)
            console.log(hotel, `<<<<hotel`)
        } catch (error) {
            console.log(error.response)
        }

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div className="mt-3 p-5 bg-primary">
                <h1 className="text-white">Let`s Check in Today</h1>
                <p className="text-white pb-4">Search for available hotel today</p>
                <div className="search-bar bg-warning p-1 mx-5 rounded">
                    <form className="d-flex " role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Where are you going?"
                            aria-label="Search"
                        />
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
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

            <div
                id="section1"
                className="container-fluid gap-4"
                style={{ padding: "100px 20px" }}
            >
                <h1>Section 1</h1>
                <HotelCards />
                <HotelCards />
                <HotelCards />
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