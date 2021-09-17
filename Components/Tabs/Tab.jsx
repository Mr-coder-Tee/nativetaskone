import React from "react";
import { View, Image, TouchableOpacity,SafeAreaView } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { Home, About, Adduser, Contact } from "../index";
import { COLORS, icons } from "../../constants";
const Tab = createBottomTabNavigator();
import {users} from '../../UsersDetails'
/*
screenOptions={{
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
}}
*/



const Tabs = () => {
  
  const Num=users.length
  return (
    
    <Tab.Navigator
    style={{paddingTop:20,backgroundColor: COLORS.primary,borderTopWidth: 0,}}
    screenOptions={{
      tabBarStyle:{
       backgroundColor:'#0000'

      },
      'scrollEnabled': true,
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
        
      ],
      // headerShown:false
      
    }}
      // tabBarOptions={{
      //   showLabel: false,
      //   style: {
      //     borderTopWidth: 0,
      //     backgroundColor: "transparent",
      //     elevation: 0,
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"

        children={(props)=>{
          return(
            <Home users={users} prop={props}/>
          )
         }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.Home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
           tabBarBadge:Num
          // tabBarButton: (props) => <TabBarcustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.aboutme}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        //   tabBarButton: (props) => <TabBarcustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Adduser"
        children={()=>{
          return(
            <Adduser users={users} />
          )
         }}
        // component={Adduser}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.adduser}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        //   tabBarButton: (props) => <TabBarcustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.contactme}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        //   tabBarButton: (props) => <TabBarcustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
