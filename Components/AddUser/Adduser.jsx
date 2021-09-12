import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { COLORS, icons, FONTS, SIZES } from "../../constants";

const genderOption = [
  { label: "Male", value: "Male", imageIcon: icons.male },
  { label: "Female", value: "Female", imageIcon: icons.female },
];

const Adduser = () => {
  const [gender, SetGender] = useState();
  const [name,setName]=useState();
  const [surname,setSurname]=useState();
  const [age,setAge]=useState();
  const [location,setLocation]=useState();

  const getGender = (value) => {
    SetGender(value);
  };

  //   const TextField=(props)=>{
  //       const {name,label}=props
  //       return(
  //         <View>
  //         <TextInput
  //          {...props}
  //         />
  //         <Text style={{paddingLeft:10,color:COLORS.danger,...FONTS.body4}}>Please enter your {label}</Text>
  //       </View>
  //       )
  //   }

  // useEffect(()=>{
  //     getGender()
  // },[gender])

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ ...FONTS.h1, textAlign: "center" }}>Registration</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          // onChangeText={onChangeText}
        />
        <Text style={{ paddingLeft: 10, color: COLORS.danger, ...FONTS.body4 }}>
          Please enter your name
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Surname"
          // onChangeText={onChangeText}
        />
        <Text style={{ paddingLeft: 10, color: COLORS.danger, ...FONTS.body4 }}>
          Please enter your surname
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          placeholder="Age"
          keyboardType="numeric"
        />
        <Text style={{ paddingLeft: 10, color: COLORS.danger, ...FONTS.body4 }}>
          Please enter your age
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Location"
          multiline
          numberOfLines={4}
          style={{ padding: 10, margin: 10, borderColor: COLORS.black }}
          // inlineImageLeft='search_icon'
          // onChangeText={onChangeText}
        />
        <Text style={{ paddingLeft: 10, color: COLORS.danger, ...FONTS.body4 }}>
          Please enter your location
        </Text>
      </View>
      <SwitchSelector
        style={styles.margin}
        options={genderOption}
        initial={0}
        selectedColor={COLORS.white}
        buttonColor={COLORS.purple}
        borderColor={COLORS.purple}
        hasPadding
        onPress={(value) => getGender(value)}
      />
      <Button
        //   onPress={onPressLearnMore}
        title="Submit"
        color="#2196F3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin: {
    margin: 10,
  },
});

export default Adduser;
