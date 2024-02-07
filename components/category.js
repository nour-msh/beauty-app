import { StyleSheet, View,Text} from "react-native";

const Category = ({textCat}) =>{
return(
<View style={styles.catView}>
    <View style={styles.cat}></View>
    <Text style={{paddingTop:"3%"}}>{textCat}</Text>
</View>
        )
}

const styles= StyleSheet.create({
    cat:{
        height:69,
        width:69,
        borderRadius:50,
        backgroundColor:"#FFA4AE",
        marginRight:"3%",
    },
    catView:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
});

export default Category