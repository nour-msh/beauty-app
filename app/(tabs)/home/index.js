import {Text, View, Button, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Box from "../../../components/box";
import Category from "../../../components/category";
import Service from "../../../components/serviceCard";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Home() {
    
 const router = useRouter();
     return(
        <>
      <View>
      <Box/>
      </View>
      <View style={{display:"flex", justifyContent:"space-between", flexDirection:"row", bottom:120, paddingLeft:"5%", paddingRight:"5%"}}>
        <View >

            <Text style={{fontWeight:300, fontSize:22, color:"white"}}>Welcome to</Text>
            <Text style={{fontWeight:800, fontSize:30 ,color:"white"}}>Beauty Salon</Text>
            </View>
            <View style={{display:"flex", justifyContent:"space-between", flexDirection:"row", gap:10}}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <FontAwesome name="opencart" size={18} color="black" />
            </View>
        </View>
        <View style={styles.container}>
            <Text style={{fontWeight:600, fontSize:16}}> Popular Services</Text>
            <ScrollView horizontal={true}>

            <View style={styles.slider}>

                <Category textCat="All" />
                <Category textCat="Skin"/>
                <Category textCat="Hair"/>
                <Category textCat="Body"/>
                <Category textCat="Nails"/>

            </View>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.scroller}>
                
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{ router.push("/home/services")
                }}>
                <Service/>
               </TouchableOpacity>  
            
            </View>
            </ScrollView>
        </View>
      </>

)
}

const styles= StyleSheet.create({
    container:{
        padding:"5%",
        bottom:50


    },
    slider:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"5%",
        },

        scroller:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            flexWrap:"wrap",
            marginTop:"5%",
        }
})