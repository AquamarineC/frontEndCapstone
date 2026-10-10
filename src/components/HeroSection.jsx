import "./heroSection.css" 

// call to action page


function HeroSection(){
    var name = "Little Lemon"
    var location = "Chicago" 
    var description = "We are family owned restaurant dedicated to serve health food and supporting local business"


    return (
    <>
        <h1 className="">{name}</h1>
        <p>{location}</p>
        <p>{description}</p>
        <a href="#reservations">
            <button className="researchTable">Reserve a Table Now
                <img src="../src/assets/icons_assets/Dish icon.svg" className="icon" alt="pic" />
            </button>
        </a>
    </>
    )
}



export default HeroSection