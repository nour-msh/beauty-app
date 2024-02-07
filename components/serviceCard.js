import { StyleSheet, View,Text} from "react-native";

const Service = () =>{
return(
<View style={styles.serviceView}>
    <View style={styles.service}></View>
    <View style={styles.serviceText}>
        <Text style={{fontWeight:600}}>Title</Text>
        <Text style={{fontWeight:600, color:"#FE6778"}}>$Price</Text>
    </View>
</View>
        )
}

const styles= StyleSheet.create({
    serviceView:{
        height:178,
        width:150,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:15,
        marginBottom:"5%"

    },
    service:{
        height:114,
        width:125,
        borderRadius:10,
        backgroundColor:"#FFA4AE",
    },
    serviceText:{
        padding:"5%",
        textAlign:"left",
        marginRight:80,
    }
});

export default Service