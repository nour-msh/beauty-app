import { StyleSheet,View,Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const Search = () => {
    return(
<View style={styles.bar}>
    <View style={styles.barInside}>

<FontAwesome5 name="search" size={18} color="#FE6778" />
<Text style={{color:"#BDBDBD"}}> Search by Product</Text>
    </View>
</View>
    );
};

const styles=StyleSheet.create({

    
    bar: {
        height: 50,
        borderRadius:15,
        width:335,
        padding: 10,
        borderWidth:1,
        borderColor: "#FFE1E4",
        elevation:5,
        backgroundColor:"white",
        bottom:100
        
    },
    barInside:{
        display:"flex",
        flexDirection:"row",
        padding:5
    },

})

export default Search