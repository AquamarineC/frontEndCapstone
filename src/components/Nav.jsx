 
import './Nav.css';

function Nav () {

    return (
<>  
    
    <ul className="navlinks">
        <img src="../../public/Logo.svg" alt="Company Logo" width="400" height="100" />

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#orderonline">Order Online</a></li>
        <li><a href="#login">Login</a></li>
    </ul>
</>
)
}

export default Nav