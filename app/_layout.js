import { Stack } from "expo-router";

export default function _layout(){
return < Stack screenOptions={{

    headerStyle:{
        backgroundColor: "pink"
    },
    headerTintColor:
        "white",
}}>
<Stack.Screen name="index" options={{headerTitle:"Home"}}/>
<Stack.Screen name="login" options={{headerTitle:"Login"}}/>
<Stack.Screen name="signup" options={{headerTitle:"Sign Up"}}/>
<Stack.Screen name="(tabs)" options={{headerShown:false}}/>
</Stack>
}