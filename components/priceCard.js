import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";

const PriceCard = ({price}) => {
    return (
        <View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
         
        </View>
      );
    };

const styles = StyleSheet.create({
    button:{
width:92,
height:35,
borderRadius:25,
backgroundColor:"#FE6778",
marginRight:"5%"

    },
    price:{
        color:"white",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center",
        paddingTop:"8%"
    }});

    export default PriceCard