import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { Home, About, Adduser, Contact } from "../index";
import { COLORS, icons } from "../../constants";
const Tab = createBottomTabNavigator();
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
const TabBarcustomButton = ({ children, onPress, accessibilityState }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          activeOpacity={1}
          onPress={onPress}
        >
          {console.log("children->", children)}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
   
    screenOptions={{
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          "display": "flex"
        },
        null
      ]
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
        component={Home}
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
        component={Adduser}
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
