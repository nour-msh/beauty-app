
import AppointmentCard from "../../../components/appointmentCard";
import { ScrollView, StyleSheet, View,Text, FlatList} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { appData } from "../../../mockdata/appData";

export default function Appointments() {
   
    return (
<>
<View style={{display:"flex", flexDirection:"row", top:60, paddingLeft:"5%"}} >
    <View>
    <Ionicons name="chevron-back" size={24} color="black" style={{top:"10%"}}/>
    </View>
    <Text style={{fontWeight:600, fontSize:24}} > Appointments</Text>
</View>
<View style={styles.appContainer}>

        <FlatList showsVerticalScrollIndicator={false} data={appData} keyExtractor={(item)=> {return item.id}} renderItem={({item})=>{return <AppointmentCard appointment={(item)}/>}}></FlatList>
</View>

</>
    )};

const styles=StyleSheet.create({
    appContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        top:100

    }
})