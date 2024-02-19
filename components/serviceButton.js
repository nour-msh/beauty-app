import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const ServiceButton = ({ title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>{title}</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 32,
        borderRadius: 5,
        backgroundColor: "#EBEAEA",
        marginRight: "5%"

    },
    btnText: {
        color: "black",
        fontSize: 14,
        textAlign: "center",
        paddingTop: "5%"
    }
});

export default ServiceButton