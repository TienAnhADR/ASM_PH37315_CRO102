import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginComd from './compds/LoginComd';
import RegisterComnd from './compds/RegisterComnd';
import HomeCompd from './compds/HomeCompd';
import WellcomeCompd from './compds/WellcomeCompd';
import Favorites from './compds/Favorites';
import Setting from './compds/Settings';

const Tab = createBottomTabNavigator();
const Stack= createNativeStackNavigator();

// (...)
const Tabs = ()=>{
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeCompd') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart';
            }
            else if (route.name === 'Setings') {
              iconName = focused ? 'restaurant' : 'restaurant';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="HomeCompd" component={HomeCompd} options={{headerShown:false}}/>
        <Tab.Screen name="Favorites" component={Favorites} options={{headerShown:false}}/>
        <Tab.Screen name="Setings" component={Setting} options={{headerShown:false}}/>

      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WellcomeCompd'>
       <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
       <Stack.Screen name="WellcomeCompd" component={WellcomeCompd} options={{headerShown:false}}/>
        <Stack.Screen name="LoginComd" component={LoginComd} options={{headerShown:false}}/>
        <Stack.Screen name="RegisterComnd" component={RegisterComnd} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}