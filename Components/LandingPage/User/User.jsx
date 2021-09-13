import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";
import { Header } from "react-native-elements";
import { COLORS, icons,FONTS } from "../../../constants";
import { Formik } from "formik";
import * as Yup from "yup";

const User = ({ navigation, route }) => {
  const { data } = route.params;
  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);
  const [age, setAge] = useState(data.age);
  const [location, setLocation] = useState(data.location);
  const [genders, SetGender] = useState(data.gender);

  const validate = Yup.object({
    // age: Yup.number().required("enter valid age"),
    location: Yup.string()
      .max(15, "enter valid location")
      .required("Enter Location"),
  });

  return (
    <View>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </Header>
      <Text style={{ ...FONTS.h1, textAlign: "center" }}>Hello {data.name}</Text>
      <ScrollView>
          <View>
            <TextInput
              style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
              onChangeText={setName}
              value={name}
            />
            {!name && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  enter valid name
                </Text>
              )}
          </View>
           <View>
           <TextInput
             style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
             onChangeText={setSurname}
             value={surname}
           />
           {!surname && (
               <Text
                 style={{
                   paddingLeft: 10,
                   color: COLORS.danger,
                   ...FONTS.body4,
                 }}
               >
                 enter valid surname
               </Text>
             )}
         </View>
         <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                placeholder={age}
                keyboardType="numeric"
                onChangeText={setAge}
                value={age}
              />
              {/* //&& typeof(age)==='number' */}
              {(!age ) && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  enter valid age
                </Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder="Location"
                multiline
                numberOfLines={4}
                style={{ padding: 10, margin: 10, borderColor: COLORS.black ,borderWidth: 1,}}
                // inlineImageLeft='search_icon'
                onChangeText={setLocation}
                value={location}
              />
              {!location&& (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  Enter Location
                </Text>
              )}
            </View>
            <View>
              <TextInput
                placeholder="Genger"
                style={styles.input}
                // inlineImageLeft='search_icon'
                onChangeText={SetGender}
                value={genders}
              />
              {!genders && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  Enter valid gender
                </Text>
              )}
            </View>
            <Button
                // onPress={handleSubmit}
            //   disabled={!isValid}
              title="Submit"
              style={{
                color: "#2196F3",
                // color:COLORS.white,
                backgroundColor: COLORS.primary,
              }}
            />
                 </ScrollView>
      
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
export default User;
