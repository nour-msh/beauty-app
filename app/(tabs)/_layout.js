import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function _layout(){
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name="home" options={{tabBarLabel:"Home", title:"Home", tabBarIcon: () => <AntDesign name="home" size={24} color="#999898" />}}/>
            <Tabs.Screen name="products" options={{tabBarLabel:"Products", title:"Products" ,tabBarIcon: () => <AntDesign name="inbox" size={25} color="#999898" />}} />
            <Tabs.Screen name="appointments" options={{tabBarLabel:"Appointments", title:"Appointments", tabBarIcon: () =>  <EvilIcons name="calendar" size={32} color="#999898" />}} />
            <Tabs.Screen name="favorites" options={{tabBarLabel:"Favorites", title:"Favorites", tabBarIcon: () => <MaterialIcons name="favorite-outline" size={26} color="#999898" />}}/>
            <Tabs.Screen name="profile" options={{tabBarLabel:"Profile", title:"Profile", tabBarIcon: () => <Octicons name="person" size={25} color="#999898" />}}/>
        </Tabs>
    )
}