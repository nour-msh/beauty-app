
import AppointmentCard from "../../../components/appointmentCard"
import { ScrollView, StyleSheet, View,Text} from "react-native"

export default function Appointments() {

    return (

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

    )};

const styles=StyleSheet.create({
    appContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",top:100

    }
})