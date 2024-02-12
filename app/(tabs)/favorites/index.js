import {Text, View, ScrollView, Button, StyleSheet,TouchableOpacity} from "react-native";
import {useRouter, Link} from "expo-router";
import Search from "../../../components/searchBar";
import Product from "../../../components/productCard"
import Box from "../../../components/box";


export default function Products() {
const router= useRouter();
  return (
    <View>

    <Box/>
<View style={styles.container}>
    <Search/>   
<Text style={{fontWeight:600, bottom:30}}>Products</Text>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
<View style={styles.slider} > 
<Button title="Lip Stick"
  color="black" />
  <Button title="Lip Tint"
  color="black" />
  <Button title="Eye Shadow"
  color="black" />
  <Button title="Mascara"
  color="black" />

</View>
</ScrollView>

    <ScrollView showsVerticalScrollIndicator={false}>


    <View style={styles.scroller}>

    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 
    <TouchableOpacity onPress={()=>{ router.push("/products/productDetails")
                }}>

   <Product/>
</TouchableOpacity> 


    </View>
</ScrollView>
</View>


    </View>
    
    );
}

const styles= StyleSheet.create({
    container:{
      padding:"5%",
  },
  scroller:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
    marginTop:"5%",
},
slider:{
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:"5%",
  bottom:30

  },
});

