import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";


const ServiceCard = ({ details, onPress }) => {
    const { name, price, imageUrl } = details
    


    return (
        <TouchableOpacity onPress={onPress} style={styles.serviceView}>
            <View style={styles.service}><Image source={imageUrl} style={{height:114, width:125}}/></View>
            <View style={styles.serviceText}>
                <Text style={{ fontWeight: 600 }}>{name}</Text>
                <Text style={{ fontWeight: 600, color: "#FE6778" }}>{price}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serviceView: {
        height: 178,
        width: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 20

    },
    service: {
        borderRadius: 15,
    },
    serviceText: {
        marginTop:"2%",
        
        textAlign: "left",
        
    }
});

export default ServiceCard