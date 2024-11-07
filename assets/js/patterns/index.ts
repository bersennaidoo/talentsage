import { destroyBooking, editBooking, newBooking, saveBooking } from "./booking-table/booking-grid"

const Main = () => {
        newBooking()
        editBooking()
        destroyBooking()
        saveBooking()
}

Main()