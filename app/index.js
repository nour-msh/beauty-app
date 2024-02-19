import { Redirect } from "expo-router";
import Cart from "../app/(tabs)/home/cart"
import BookAppointment from "../app/(tabs)/home/bookAppointment"

export default function Index(){
    return(
        <Redirect href={"/(tabs)/home"}/>
        // <Cart/>
        // <BookAppointment/>


    )
}