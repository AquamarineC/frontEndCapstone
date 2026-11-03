 
import { Link } from "react-router"
import Homepage from "./Homepage"
 
function Nav () {

    return (
        <div className="navigation flex justify-evenly bg-olive-200 h-30 mb-[16px]">  
            <img className="border" src="../src/assets/icons_assets/Logo.svg" alt="company logo" />
            <ul className="flex items-center ">
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li className="bg-blue-200 rounded-2xl"><Link to="/bookingpage">Reservations</Link></li>
                <li><Link>Order Online</Link></li>
                <li><Link>Login</Link></li>
            </ul>
        </div>
)
}


export default Nav