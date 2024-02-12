import { StyleSheet, View,Text} from "react-native";

const Product = () =>{
return(
<View style={styles.productView}>

        <View style={styles.productDetails}>

        <Text style={{fontWeight:600}}>Title</Text>
        <Text style={{fontWeight:600, color:"#FE6778"}}>$Price</Text>
        </View>

</View>
        )
}

const styles= StyleSheet.create({
    productView:{
        height:170,
        width:150,
        display:"flex",
        backgroundColor:"white",
        borderRadius:15,
        marginBottom:"10%"

    },
    productDetails:{
        height:50,
        width:150,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:"#FFA4AE",
        top:120,
        padding:"5%",
        textAlign:"left",


    },
  
});

export default Product