import {Text, View, Button} from "react-native";
import {useRouter, useLocalSearchParams, Stack, author} from "expo-router";

export default function About() {
    const router = useRouter();
    const {id, author}= useLocalSearchParams();
  return (
    <>
    <Stack.Screen options={{headerTitle: `Article ${id}`}}/>
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
    
        <Text style={{fontSize:30}}>Blog Post Details {id}</Text>
        <Text style={{fontSize:30}}>Written by {author}</Text>
        <Button onPress={()=>router.back()} title="Go Back"/>
    </View>
    </>
  );
}