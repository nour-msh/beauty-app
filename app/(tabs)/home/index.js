import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Box from "../../../components/box";
import ServiceCard from "../../../components/serviceCard";
import { serviceItems } from "../../../mockdata/serviceItems";
import Category from "../../../components/category";
import { categories } from "../../../mockdata/categories";


export default function Home() {

    const router = useRouter();


    return (
        <>
            <View>
                <Box />
            </View>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", bottom: 120, paddingLeft: "5%", paddingRight: "5%" }}>
                <View >

                    <Text style={{ fontWeight: 300, fontSize: 22, color: "white" }}>Welcome to</Text>
                    <Text style={{ fontWeight: 800, fontSize: 30, color: "white" }}>Beauty Salon</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", gap: 10 }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <FontAwesome name="opencart" size={18} color="black" />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={{ fontWeight: 600, fontSize: 16 }}> Popular Services</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.slider}>

                        {categories.map(category => (<Category key={category.id} cat={category.cat} imageUrl={category.imageUrl} />))}

                    </View>
                </ScrollView>

                <ScrollView showsVerticalScrollIndicator={false}>


                    <View style={styles.scroller} >{serviceItems.map(item => (<ServiceCard onPress={() => {
                        router.push(`/home/services/${item.id}`)
                    }} key={item.id} details={(item)} />))}</View>
                </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: "5%",
        bottom: 50


    },
    slider: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
    },

    scroller: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 20,
    }
})