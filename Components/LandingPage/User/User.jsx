import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Header } from "react-native-elements";
import { COLORS, icons, FONTS } from "../../../constants";
import { Formik } from "formik";
import * as Yup from "yup";

const User = ({ navigation, route }) => {
  const { data, users } = route.params;
  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);
  const [age, setAge] = useState(data.age);
  const [location, setLocation] = useState(data.location);
  const [genders, SetGender] = useState(data.gender);

  console.log("data", data);
  console.log("users", users);

  const index = users.findIndex((user) => user.id === data.id);

  const handleUpdate = () => {
    users[index] = {
      id: data.id,
      name: name,
      surname: surname,
      age: age,
      location: location,
      gender: genders,
      img: data.img,
    };
  };

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
      <Text style={{ ...FONTS.h1, textAlign: "center" }}>
        Hello {data.name}
      </Text>
      <ScrollView>
        <View>
          <TextInput
            style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
            onChangeText={setName}
            value={name}
            placeholder="Name"
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
            placeholder="Surname"
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
            style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
            // onChangeText={onChangeNumber}
            keyboardType="numeric"
            onChangeText={setAge}
            value={age}
            placeholder="Age"
          />
          {/* //&& typeof(age)==='number' */}
          {!age && (
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
            multiline
            numberOfLines={4}
            style={{
              padding: 10,
              margin: 10,
              borderColor: COLORS.black,
              borderWidth: 1,
            }}
            // inlineImageLeft='search_icon'
            onChangeText={setLocation}
            value={location}
            placeholder="Location"
          />
          {!location && (
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
            style={styles.input}
            // inlineImageLeft='search_icon'
            onChangeText={SetGender}
            value={genders}
            placeholder="Gender"
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
          onPress={() => handleUpdate()}
          //   disabled={!isValid}
          title="Update"
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
