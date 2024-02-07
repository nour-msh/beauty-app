import {Text, View, Button} from "react-native";
import {useRouter} from "expo-router";

export default function About() {
    const router = useRouter();
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
    
        <Text style={{fontSize:30}}>Blog Page</Text>
        <Button onPress={()=>router.push('/blog/1?author=John')} title="Go Back to blog 1"/>
        <Button onPress={()=>router.push('/blog/2?author=John')} title="Go Back to blog 2"/>
        <Button onPress={()=>router.push('/blog/3?author=John')} title="Go Back to blog 3"/>
        <Button onPress={()=>router.back()} title="Go Back"/>

    </View>
  );
}