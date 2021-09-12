import React from 'react';
import {View,Text,SafeAreaView,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native'
import { COLORS, icons,FONTS,SIZES } from "../../constants";
import Users from '../../UsersDetails'



const Home = () => {
    return ( <>
        <View>
            {
                Users.users.map((user)=>(
                    <Text key={user.id} >{user.name}</Text>
                ))
            }
        </View>
    </> );
}
 
export default Home;