import { destroyBooking, editBooking, newBooking, saveBooking } from "./booking-table/booking-grid"
import { ContactForm } from "./contact-form/contact-form"

const Main = () => {
        newBooking()
        editBooking()
        destroyBooking()
        saveBooking()
        ContactForm()
}

Main()