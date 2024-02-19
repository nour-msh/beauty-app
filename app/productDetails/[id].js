
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../../components/button";
import ServiceButton from "../../components/serviceButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import { productItems } from "../../mockdata/productItems";


export default function productDetails() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    console.log(id)
    const selectedProduct = productItems.find((item) => { return item.id == id })
    return (
        <View>
            <View style={styles.imageContainer}>
            <Image source={selectedProduct.imageUrl} style={{height:375, width:375,  borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25}}/>
            {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "5%", bottom: 350 }}>
                    <Ionicons name="chevron-back" size={24} color="black" style={{ top: "5%" }} />
                    <Ionicons name="heart-circle" size={50} color="black" />
                </View> */}

            </View>

            <View style={styles.infoContainer}>
                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>Shades</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{ display: "flex", flexDirection: "column" }}>
                    {selectedProduct.additions?.map((title) => <ServiceButton title={title} />)}
                </ScrollView>

                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>About</Text>
                <Text>Gently pat your skin dry with a clean towel. Avoid harsh rubbing.</Text>
                {/* <Text>{selectedProduct.name}</Text> */}
                <Text style={{ fontWeight: 600, paddingBottom: 10, paddingTop: 10 }}>Reviews</Text>
                <Text>I recently had the pleasure of indulging in a beauty service that left me feeling like a whole new person. Read More</Text>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "30%" }}>

                    <Button title="Add to Cart" />
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
