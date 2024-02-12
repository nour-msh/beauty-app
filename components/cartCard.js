import { StyleSheet, View,Text} from "react-native";
import PriceCard from "./priceCard";

const CartCard = () =>{
return(
<View style={styles.cardView}>

            <View style={styles.details}>

                    <Text style={{fontSize:18}}>Service Title</Text>
                    <PriceCard price={"$200"}/>

            </View>

            <View  style={styles.details}>

                    <Text style={{fontSize:18}}>Date</Text>
                    <Text style={{fontSize:18}} >Time</Text>
            </View>

</View>
        )
}

const styles= StyleSheet.create({
    cardView:{
        height:111,
        width:325,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:15,
        padding:"10%",
        marginBottom:"5%"
    },
    appointmentDetails:{ 
        padding:"5%",
    },
    details:{
        display:"flex",
        flexDirection:"column",
        // justifyContent:"space-between",
        gap:10,
        // padding:'2%'
    }
  
});

export default CartCard