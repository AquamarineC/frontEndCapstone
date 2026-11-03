

// call to action page

import Booking from "./BookingForm"
import { Link } from "react-router"

function HeroSection(){
    var name = "Little Lemon"
    var location = "Chicago" 
    var description = " loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm We are family owned restaurant dedicated to serve health food and supporting local business "


    return (
    <>
    <div className="">
        <div className="container border">
            <h1 className="">{name}</h1>
            <p>{location}</p>
            <p className="">{description}</p>
        </div>
        <Link to="/bookingpage">
       
            <button className="hover:cursor-pointer, bg-blue-200 rounded-2xl">
                <img src="../src/assets/icons_assets/Dish icon.svg" className="icon" alt="pic"/>
                <span>Reserve a table now</span>
            </button>

         </Link>
    </div>
    </>
    )
}



export default HeroSection