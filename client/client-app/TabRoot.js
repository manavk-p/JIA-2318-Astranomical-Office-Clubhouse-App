import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Events from "./Events";
import Settings from "./Settings";
import Desks from "./Desks";
import Rooms from "./rooms/Rooms"

const Tab = createBottomTabNavigator();

const TabRoot = ({ navigation, route }) => {
    console.log(route.params);
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Desks') {
              iconName = focused ? 'desktop' : 'desktop-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Events') {
              iconName = focused ? 'calendar' : 'calendar-outline'
            }//add more icons here. Currently we are using premade ionicon art but we can use our own icons if we make them
            else if (route.name == 'Rooms') {
              iconName = focused ? 'grid' : 'grid-outline'
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
  
        >
        <Tab.Screen name="Desks" component={Desks} />
        <Tab.Screen name="Events" component={Events} initialParams={{updateId: false}} />
        <Tab.Screen name="Rooms" component={Rooms}/>
//         <Tab.Screen name="Desks" component={Desks} />
        <Tab.Screen name="Settings" component={Settings} initialParams={{email: route.params.email}} />
      </Tab.Navigator>
  );
}


export default TabRoot;
 
