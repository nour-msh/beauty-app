import {Text, View, Button, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Box from "../../../components/box";
import Category from "../../../components/category";
import Service from "../../../components/serviceCard";
import { Link, useRouter } from "expo-router";
import { useNavigation } from "expo-router";

export default function Home() {
    
 const router = useRouter();
     return(
        <>
      <View>
      <Box/>
      </View>
            <View style={{bottom:120, paddingLeft:"5%"}}>

            <Text style={{fontWeight:300, fontSize:22, color:"white"}}>Welcome to</Text>
            <Text style={{fontWeight:800, fontSize:30 ,color:"white"}}>Beauty Salon</Text>
            </View>
        <View style={styles.container}>
            <Text style={{fontWeight:600}}> Popular Services</Text>
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