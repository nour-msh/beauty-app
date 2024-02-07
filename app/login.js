import {Text, View, Button} from "react-native";
import {useRouter} from "expo-router";

export default function About() {
    const router = useRouter();
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
    
        <Text style={{fontSize:30}}>Login Page</Text>
        <Button onPress={()=>router.back()} title="Go Back"/>
    </View>
  );
}