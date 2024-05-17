import { useState } from "react";
export default function Filter() {
    const [hotelClass, setHotelClass] = useState([])
    const handleOnSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="col-sm-2 rounded bg-warning">
            <div className="pt-2 m-auto">
                <h2>Filter</h2>
                <label htmlFor="">By Hotel Class:</label>
                <form className="d-flex flex-column gap-2" onSubmit={handleOnSubmit}>

                    <div className="mx-2">
                        <input type="checkbox" name="filter" />
                        <label className="mx-2" htmlFor="filter" name="hotelClass" value={"5 stars"} onChange={(event) => { setHotelClass(event.target.value) }}>5 stars</label>
                    </div>
                    <div className="mx-2">
                        <input type="checkbox" name="filter" />
                        <label className="mx-2" htmlFor="filter" name="hotelClass" value={"4 stars"} onChange={(event) => { setHotelClass(event.target.value) }}>4 stars</label>
                    </div>
                    <div className="mx-2">
                        <input type="checkbox" name="filter" />
                        <label className="mx-2" htmlFor="filter" name="hotelClass" value={"3 stars"} onChange={(event) => { setHotelClass(event.target.value) }}>&le; 3 stars</label>
                    </div>
                    <button className="btn btn-primary">Filter</button>
                </form>
            </div>
            <hr className="d-sm-none" />
        </div>
    )
}