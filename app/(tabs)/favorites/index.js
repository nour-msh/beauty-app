import {Text, View, Button} from "react-native";
import {useRouter} from "expo-router";

export default function Page() {

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <Text style={{fontSize:30}}>Favorites Page</Text>
    </View>
  );
}