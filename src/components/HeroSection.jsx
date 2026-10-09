import "./heroSection.css"
// import "../assets/hero.png"

function HeroSection(){
    return (
    <>
        <h1 className="">Little Lemon</h1>
        <p>Chicago</p>
        <p>We are family owned restaurant dedicated to serve health food and supporting local business</p>
        <a href="#reservations">
            <button className="researchTable">Reserve a Table Now
                <img src="../src/assets/icons_assets/Dish icon.svg" className="icon" alt="pic" />
            </button>
        </a>
    </>
    )
}



export default HeroSection