import { StyleSheet, View,Text, Image, TouchableOpacity} from "react-native";

const ProductCard = ({product,onPress}) =>{
    const {name, price, imageUrl}= product
return(
<TouchableOpacity style={styles.productView} onPress={onPress}>

        <Image source={imageUrl} style={{height:170, width:150}} />
        <View style={styles.productDetails}> 

        <Text style={{fontWeight:600}}>{name}</Text>
        <Text style={{fontWeight:600, color:"#FE6778"}}>{price}</Text>
        </View>

</TouchableOpacity>
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
        // opacity:0.5,
        padding:"5%",
        bottom:50,
        textAlign:"left",


    },
  
});

export default ProductCard