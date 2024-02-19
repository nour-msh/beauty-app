
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../../../../components/button";
import ServiceButton from "../../../../components/serviceButton";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { serviceItems } from "../../../../mockdata/serviceItems";



export default function Services() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    console.log(id)
    const selectedService = serviceItems.find((item) => { return item.id == id })

    // const navigation = useNavigation();
    // const navigateApp = ()=>{ navigation.navigate("bookAppointment")}
    return (
        <View>


            <View >
            <Image source={selectedService.imageUrl} style={{height:375, width:375}}/>
                {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5%", bottom: 350 }}>
                    <Ionicons name="chevron-back" size={24} color="black" style={{ top: "5%" }} />
                    <Ionicons name="heart-circle" size={50} color="black" />
                </View> */}
            </View>

            <View style={styles.infoContainer}>
                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>Add-ons</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{ display: "flex", flexDirection: "column" }}>

                    {selectedService.additions?.map((title) => <ServiceButton title={title} />)}

                </ScrollView>

                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>About</Text>
                <Text>{selectedService.name}</Text>
                <Text>Gently pat your skin dry with a clean towel. Avoid harsh rubbing.</Text>
                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>Reviews</Text>
                <Text>I recently had the pleasure of indulging in a beauty service that left me feeling like a whole new person.<Text style={{ color: "#FE6778" }}> Read More</Text> </Text>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5%" }}>


                    <Button title="Book Service" onPressed={() => { router.push("/home/bookAppointment") }} />


                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    infoContainer: {
        padding: "5%",
        display: "flex",
    },


});
