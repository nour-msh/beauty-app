
import AppointmentCard from "../../../components/appointmentCard";
import { ScrollView, StyleSheet, View,Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Appointments() {

    return (
<>
<View style={{display:"flex", flexDirection:"row", top:60, paddingLeft:"5%"}} >
    <View>
    <Ionicons name="chevron-back" size={24} color="black" style={{top:"10%"}}/>
    </View>
    <Text style={{fontWeight:600, fontSize:24}} > Appointments</Text>
</View>
        <ScrollView>
<View style={styles.appContainer}>

            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>
            <AppointmentCard/>

</View>
        </ScrollView>

</>
    )};

const styles=StyleSheet.create({
    appContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",top:100

    }
})