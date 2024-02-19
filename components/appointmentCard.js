import { StyleSheet, View,Text} from "react-native";

const AppointmentCard = ({appointment}) =>{
    const {date,time, service_name, price}=appointment //destructuring
return(
<View style={styles.appointmentView}>

            <View style={styles.appText}>

                    <Text style={{fontWeight:"normal"}}>{date}</Text>
                    <Text style={{fontWeight:"normal"}}> {time}</Text>
            </View>

            <View  style={styles.appText}>

                    <Text style={{fontWeight:"bold", color:"#FE6778" , fontSize:21}}> {service_name}</Text>
                    <Text style={{fontWeight:"bold", color:"#FE6778" , fontSize:21}}>{price}</Text>
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
        marginBottom:20
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