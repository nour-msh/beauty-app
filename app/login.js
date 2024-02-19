// import {Pressable, View, StyleSheet, Image,Text, TouchableOpacity} from "react-native";
// import { Link } from "expo-router";
// import {useNavigation, useRouter} from "expo-router";
// import Input from "../components/input.js";
// import { LinearGradient } from 'expo-linear-gradient';
// import Button from "../components/button.js";
// // import Box from "../components/box";
// // import Category from "../components/category";
// // import Service from "../components/serviceCard";

// export default function Login() {
//     const router = useRouter();
//     // const navigation = useNavigation();
//     // const navigateSignup = ()=>{ navigation.navigate("signup")}

//   return (
//     <LinearGradient colors={['#fff', '#fff', '#FFA4AE']} style={styles.linearGradient}>
//     <View style={{ flex:1, justifyContent:"center" , alignItems:"center", }}>
//       <Image 
//       style={styles.logo}
//       source={require("../assets/logo.png")}/>
//       <Text style={styles.loginText}>Login</Text>
//         <Input label="Email"/>
//         <Input label="Password"/>
//         <View style={styles.forgotText } >

//         <Text style={styles.passText } >Forgot Password?</Text>
//         </View>
//         <Button title="Login"/>


//         <Text style={styles.passText} >Don’t have an account?  <Link href={'/signup'}>
//         <Text style={{color:"#FE6778", fontWeight:"500"}}> Sign Up </Text>
//         </Link></Text>
//         {/* <TouchableOpacity style={{color:"#FE6778", fontWeight:"500"}} onPress={navigateSignup}><Text>Sign Up</Text></TouchableOpacity> */}

//     </View>
// </LinearGradient>
// );
// }

// const styles= StyleSheet.create({
//   logo:{
//   height: 200,
//   width:200,

// },
// linearGradient: {
//   flex: 1,
//   paddingLeft: 15,
//   paddingRight: 15,
//   borderRadius: 5
// },
// loginText:{
//   fontSize:28,
//   paddingBottom:"5%",
//   paddingTop:"5%"
  
// },
// passText:{
//   fontSize:14,
//   color:"#A5A6A9",
//   padding:10,

// },
// forgotText:{
// marginRight:200}

// })

