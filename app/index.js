import { StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import React from "react";

export default function Page() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
    
        <Text>Home Page</Text>
        <Link href={'/login'}>
        <Text> Go to Login Page</Text>
        </Link>

        <Link href={'/signup'}>
        <Text> Go to Sign Up Page</Text>
        </Link>

        <Link href={'/home'}>
        <Text> Go to Tabs</Text>
        </Link>
    </View>
  );
}