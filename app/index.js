import { Redirect } from "expo-router";
import BookAppointment from "./(tabs)/home/bookAppointment";
import CartCard from "../components/cartCard";
import PriceCard from "../components/priceCard";
import Cart from "./(tabs)/home/cart";

export default function Index(){
    return(
        <Redirect href={"/(tabs)/home"}/>
        // <Cart/>
    )
}