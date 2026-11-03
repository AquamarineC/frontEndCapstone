import BookingForm from "./BookingForm"
import Homepage from "./Homepage"

function BookingPage(){
    return (
        <div className="bookingPage border ">
            <Homepage />

            <h1>Below is the form to book a a apage</h1>
            <BookingForm />

        </div>
    )
}

export default BookingPage