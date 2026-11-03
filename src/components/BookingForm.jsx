
import Homepage from "./Homepage"

function BookingForm () {

    return (
        <>
            <form className="flex flex-col border items-center bg-blue-100">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" />
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <select type="number" placeholder="1" min="1" max="10" id="guests">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option> 
                        <option>Anniversary</option>
                    </select>
                    <input type="submit" value="Make Your reservation"/>
            </form>

        

        </>
    )
}

export default BookingForm
