import Box from "../../../components/box";
import CartCard from "../../../components/cartCard";
import { View, Text,StyleSheet, ScrollView } from "react-native";
import Button from "../../../components/button";
import { Ionicons } from '@expo/vector-icons';


export default function Cart () {
    return(
        <>

<Box/>
<View style={{display:"flex", flexDirection:"row",bottom:120, paddingLeft:"5%", }} >
    <View>
    <Ionicons name="chevron-back" size={24} color="white" style={{top:"10%"}}/>
    </View>
    <Text style={{fontWeight:600, fontSize:24, color:"white"}} > Cart</Text>
</View>
<ScrollView>

        <View style={styles.cartContainer}>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
<CartCard/>
        </View>
</ScrollView>
<View style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"5%"}}>


<Button title="Checkout"/>
    
</View>
        </>
    )
};

const styles= StyleSheet.create({
    cartContainer:{
        padding:"5%",
        display:"flex",
    }
})


