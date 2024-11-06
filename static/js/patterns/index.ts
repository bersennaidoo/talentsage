import { BookingTableCreate, BookingTableDelete, BookingTableEdit, BookingTableListFetch, BookingTableListJson } from "./booking-table/booking_table"

const Main = () => {
        BookingTableListJson()
        BookingTableCreate()
        BookingTableEdit()
        BookingTableDelete()
}

Main()