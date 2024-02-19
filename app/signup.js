// import { Text, View, StyleSheet, Image } from "react-native";
// import { useRouter, Link } from "expo-router";
// import Input from "../components/input.js";
// import { LinearGradient } from 'expo-linear-gradient';
// import Button from "../components/button.js";


// export default function Signup() {
//     const router = useRouter();
//     return (
//         <LinearGradient colors={['#fff', '#fff', '#FFA4AE']} style={styles.linearGradient}>
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
//                 <Image
//                     style={styles.logo}
//                     source={require("../assets/logo.png")} />
//                 <Text style={styles.loginText}>Sign Up</Text>
//                 <Input label="Full Name" />
//                 <Input label="Email" />
//                 <Input label="Password" />
//                 <Input label="Phone Number" />

//                 <View style={styles.signupBtn}>

//                     <Button title="Sign Up" />
//                 </View>

//                 <Text style={styles.passText} >Already have an account? <Link href={'/index'}>
//                     <Text style={{ color: "#FE6778", fontWeight: "500" }}> Login </Text>
//                 </Link>
//                 </Text>


//             </View>
//         </LinearGradient>


//     );
// }

// const styles = StyleSheet.create({
//     logo: {
//         height: 200,
//         width: 200,

//     },
//     linearGradient: {
//         flex: 1,
//         paddingLeft: 15,
//         paddingRight: 15,
//         borderRadius: 5
//     },
//     loginText: {
//         fontSize: 28,
//         paddingBottom: "5%",
//         paddingTop: "5%"

//     },
//     passText: {
//         fontSize: 14,
//         color: "#A5A6A9",
//         padding: 10,

//     },
//     signupBtn: {
//         paddingTop: 20
//     }


// })