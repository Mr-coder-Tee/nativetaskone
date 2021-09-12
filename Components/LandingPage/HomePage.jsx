import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { COLORS, icons, FONTS, SIZES, Item } from "../../constants";
import Users from "../../UsersDetails";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { version } from "react";
const SCREEN = Dimensions.get("window").width;

const Home = () => {
  const { users } = Users;

  
  const ItemBox = ({ data,handleDelete }) => {
      const rightSwipe = () => {
        
        return (
          <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
            <View
              style={{
                backgroundColor: COLORS.danger,
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                height:"100%",
              }}
            >
              <Animated.Text style={{ ...FONTS.h4}}>
                Delete
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      };
    return (
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={{
            height: 80,
            width: SCREEN,
            backgroundColor: COLORS.white,
            justifyContent: "center",
            padding: 16,
          }}
        >
          <Text style={{ ...FONTS.body2 }}>
            {data.id + "." + data.name + " " + data.surname}
          </Text>
        </View>
      </Swipeable>
    );
  };

  const deleteItem=(index)=>{
      const arr=[...users];
      arr.splice(index,1);
      console.log('arr->',arr)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item,index }) => {
          return <ItemBox data={item} handleDelete={()=>deleteItem(index)}/>;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                width: SCREEN,
                backgroundColor: COLORS.black,
              }}
            ></View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
