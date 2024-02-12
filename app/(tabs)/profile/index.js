
import { View,StyleSheet, Text } from "react-native";
import Input from "../../../components/input";

export default function Profile() {

  return (

    <View style={styles.profContainer}>

    <View style={styles.prof}>
      <View style={styles.profImage}></View>
      <Text style={{fontSize:21, color:"#FE6778", padding:"5%", fontWeight:600}}>Nour Mshawrab</Text>
      <Input label="Full Name"/>
      <Input label="Email"/>
      <Input label="Password"/>
      <Input label="Phone Number"/>
    </View>

    </View>
  )};

  const styles =StyleSheet.create({
    profContainer:{
      backgroundColor:"#FFA4AE",
      height:"100%"},

      prof:{
        height:"90%",
        backgroundColor:"#f3f3f3",
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        top:120,
        paddingTop:"20%",
        display:"flex",
        // justifyContent:"center",
        alignItems:"center"
      
    },
    profImage:{
      height:137,
      width:137,
      borderRadius:100,
      backgroundColor:"#FE6778",
    }
  })
