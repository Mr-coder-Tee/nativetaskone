import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './Components/Tabs/Tab';
import {Home,About,Adduser,Contact} from './Components/index'
import { SafeAreaProvider } from 'react-native-safe-area-context';



const Stack=createStackNavigator()

export default function App() {





  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={'Tab'}
      >
        <Stack.Screen name="Tab" component={Tabs} />
        {/* <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Adduser" component={Adduser}/>
        <Stack.Screen name="Contact" component={Contact}/> */}
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
