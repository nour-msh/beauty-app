import { StyleSheet, View, Image, Text } from "react-native";

const Category = ({ cat, imageUrl }) => {
    return (
        <View style={styles.catView}>

            <View style={styles.cat}>
                <Image source={imageUrl} style={{
                    height: 69,
                    width: 69
                }} />
            </View>
            <Text>{cat}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cat: {
        height: 69,
        width: 69,
        borderRadius: 50,
        backgroundColor: "#FFA4AE",
        marginRight: 10,
    },
    catView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Category