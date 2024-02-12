import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";

const TimeButton = ({title}) => {
    return (
        <View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
         
        </View>
      );
    };

const styles = StyleSheet.create({
    button:{
width:93,
height:36,
borderRadius:25,
backgroundColor:"#EBEAEA",
marginRight:"5%"

    },
    btnText:{
        color:"black",
        fontSize:14,
        textAlign:"center",
        paddingTop:"10%"
    }});

    export default TimeButton