import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { COLORS, icons, FONTS, SIZES } from "../../constants";
import { Formik } from "formik";
import * as Yup from "yup";
import {users} from "../../UsersDetails";


const genderOption = [
  { label: "Male", value: "Male", imageIcon: icons.male },
  { label: "Female", value: "Female", imageIcon: icons.female },
];

const Adduser = () => {
  const [genders, SetGender] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();

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
  const AddUser=(name,surname,age,gender,location)=>{
    users([...users,{
      id:Users.users.length+1,name:name,surname:surname,age:age,gender:gender,location:location
  }])

  // Alert.alert("New User Alert",name+" was added to the user list")
}

  const validate = Yup.object({
    name: Yup.string().required("enter valid name"),
    surname: Yup.string().required("enter valid surname"),
    age: Yup.number().required("enter valid age"),
    location: Yup.string()
      .max(15, "enter valid location")
      .required("Enter Location"),
  });

  return (
    <Formik
      initialValues={{ name: "", surname: "", age: "", location: "" }}
      validateOnMount={true}
      validationSchema={validate}
      onSubmit={(values) => AddUser(values.name,values.surname,values.age,genders,values.location)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={{ ...FONTS.h1, textAlign: "center" }}>
              Registration
            </Text>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  {errors.name}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Surname"
                onChangeText={handleChange("surname")}
                onBlur={handleBlur("surname")}
                value={values.surname}
              />
              {errors.surname && touched.surname && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  {errors.surname}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                placeholder="Age"
                keyboardType="numeric"
                onChangeText={handleChange("age")}
                onBlur={handleBlur("age")}
                value={values.age}
              />
              {errors.age && touched.age && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  {errors.age}
                </Text>
              )}
            </View>

            <View>
              <TextInput
                placeholder="Location"
                multiline
                numberOfLines={4}
                style={{ padding: 10, margin: 10, borderColor: COLORS.black }}
                // inlineImageLeft='search_icon'
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
              />
              {errors.location && touched.location && (
                <Text
                  style={{
                    paddingLeft: 10,
                    color: COLORS.danger,
                    ...FONTS.body4,
                  }}
                >
                  {errors.location}
                </Text>
              )}
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
                onPress={handleSubmit}
              disabled={!isValid}
              title="Submit"
              style={{
                color: "#2196F3",
                // color:COLORS.white,
                backgroundColor: isValid ? COLORS.primary : "#cacfd2",
              }}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
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
