
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../../../components/button";
import ServiceButton from "../../../components/serviceButton";

export default function Services () {
    return(
        <View style={styles.serviceContainer}>
            <View style={styles.imageContainer}>

</View>

<View style={styles.infoContainer}>
<Text style={{fontWeight:600, paddingBottom:10, paddingTop:10}}>Ingredients</Text>
<ScrollView>

<View style={{display:"flex", flexDirection:"row"}}>
    <ServiceButton title="Hydrating Mask"/>
    <ServiceButton title="Hydrating Mask"/>
    <ServiceButton title="Hydrating Mask"/>
    <ServiceButton title="Hydrating Mask"/>
</View>
</ScrollView>

<Text style={{fontWeight:600 ,paddingBottom:10, paddingTop:10}}>About</Text>
<Text>Gently pat your skin dry with a clean towel. Avoid harsh rubbing.</Text>
<Text style={{fontWeight:600, paddingBottom:10, paddingTop:10}}>Reviews</Text>
<Text>I recently had the pleasure of indulging in a beauty service that left me feeling like a whole new person. Read More</Text>
<View style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"5%"}}>

<Button title="Book Service"/>
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
