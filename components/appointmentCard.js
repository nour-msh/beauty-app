import { StyleSheet, View,Text} from "react-native";

const AppointmentCard = () =>{
return(
<View style={styles.appointmentView}>

            <View style={styles.appText}>

                    <Text style={{fontWeight:600}}>Monday 17 January, 2024</Text>
                    <Text style={{fontWeight:600}}>10:00 AM</Text>
            </View>

            <View  style={styles.appText}>

                    <Text style={{fontWeight:700, color:"#FE6778" , fontSize:21}}>Service Name</Text>
                    <Text style={{fontWeight:700, color:"#FE6778" , fontSize:21}}>$Price</Text>
            </View>

</View>
        )
}

const styles= StyleSheet.create({
    appointmentView:{
        height:75,
        width:325,
        display:"flex",
        justifyContent:"center",
        backgroundColor:"white",
        borderRadius:15,
        padding:"5%",
        marginBottom:"5%"
    },
    appointmentDetails:{ 
        padding:"5%",
    },
    appText:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:'2%'
    }
  
});

export default AppointmentCard