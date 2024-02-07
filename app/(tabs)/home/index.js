import {Text, View, Button, StyleSheet, ScrollView} from "react-native";
import Box from "../../../components/box";
import Category from "../../../components/category";
import Service from "../../../components/serviceCard";

export default function Home() {

  return (
      <>
      <View>
      <Box/>
      </View>
        <View style={styles.container}>
            <Text style={{fontWeight:600}}> Popular Services</Text>
            <ScrollView horizontal={true}>

            <View style={styles.slider}>

                <Category textCat="All"/>
                <Category textCat="Skin"/>
                <Category textCat="Hair"/>
                <Category textCat="Body"/>
                <Category textCat="Nails"/>

            </View>
            </ScrollView>
            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.scroller}>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </View>
            </ScrollView>
        </View>
      </>
  );
}

const styles= StyleSheet.create({
    container:{
        padding:"5%",


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