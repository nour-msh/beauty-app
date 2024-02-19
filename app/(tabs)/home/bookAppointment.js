
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../../../components/button";
import TimeButton from "../../../components/timeButton";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";


export default function BookAppointment () {
const router= useRouter();

    return(
        <View style={styles.serviceContainer}>
            <View style={styles.imageContainer}>

            <View style={{display:"flex", flexDirection:"row",justifyContent:"space-between",padding:"5%", bottom:120}}>
                <Ionicons name="chevron-back" size={24} color="black" style={{top:"5%"}}/>
                <Ionicons name="heart-circle" size={50} color="black" />
            </View>
</View>

<View style={styles.infoContainer}>

<Text style={{fontWeight:600 ,paddingBottom:10, paddingTop:10}}>Day</Text>

<Text style={{fontWeight:600, paddingBottom:10, paddingTop:10}}>Available Times</Text>
<ScrollView>

<View style={{display:"flex", flexDirection:"row"}}>
    <TimeButton title="9:00 AM"/>
    <TimeButton title="10:00 AM"/>
    <TimeButton title="11:00 AM"/>
    <TimeButton title="12:00 AM"/>
    <TimeButton title="1:00 PM"/>
    <TimeButton title="2:00 PM"/>
</View>
</ScrollView>
<View style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"5%"}}>

<Button title="Add to Cart" />
</View>
</View>
    </View>
)
};

const styles= StyleSheet.create({
    imageContainer:{
        display:'flex',
        justifyContent:"center",

        backgroundColor:"pink",
        height:"55%",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,

    },
    infoContainer:{
        padding:"5%",
        display:"flex",
},


});
