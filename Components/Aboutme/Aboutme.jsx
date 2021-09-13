import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, icons, FONTS, SIZES } from "../../constants";
import { Header, Avatar } from "react-native-elements";

const About = ({ route }) => {
  console.log("Users", route);

  const Aboutme = () => {
    return (
      <View style={styles.contentContainer}>
          <Text style={{...FONTS.h2,textAlign:'center' ,marginBottom:10}}>
              About Me
              </Text>
        <Text style={{...FONTS.body4}}>
          I am a computer science graduate of the University of Limpopo,but far
          more important to me a a coder. I solve problem and innovate solutions
          using computatonal skills.The act of programming itsef can be very
          satifying and creative.For any particular problem there are lots of
          different ways you could write a problem to solve it.But a good
          program has certain beaty and elegance about it and an elegant program
          is easy for other people to understand and its also easy for you to
          extend and adapt later as requirement change. My goal is to be an
          elegent programmer.I create java developer who specializes in software
          engineering and web development to intergrate java into business
          software,applications and website,I develop mobile apps for both Ios
          and Android. These app can be pre-installed on phones during
          developemt for testing.I can create or develop world wide web
          applications using a client server model in any specified way. This
          include database side like E-commerce site or any static site with one
          to multiple page. As system developer i implement applications and
          programs for backend processing used in businessess or
          organisations.They are mostly used in online banking and HR systems,I
          apply principles of analysis to figure out user requirements and the
          build ,design and test software appication according to those
          requirements.
        </Text>
      </View>
    );
  };
  const Experience = () => {
    return (
      <View>
        <Text>experience frame</Text>
      </View>
    );
  };
  const Education = () => {
    return (
      <View style={{padding:10,
        backgroundColor:COLORS.backdrop,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
       
        }}>

        <Text style={{...FONTS.h2,textAlign:'center' ,marginBottom:10}}>EDUCATION</Text>
        <Text style={{...FONTS.body4}}>University of limpopo 2020</Text>
        <Text style={{...FONTS.body4}}>Bsc Mathematical and computer science Degree</Text>
      </View>
    );
  };
  const Projects = () => {
    return (
      <View>
        <Text>project frame</Text>
      </View>
    );
  };
  const Skills = () => {
    return (
      <View>
        <Text>Skills frame</Text>
      </View>
    );
  };
  const Award = () => {
    return (
      <View>
        <Text>Award frame</Text>
      </View>
    );
  };
  const Language = () => {
    return (
      <View>
        <Text>Language frame</Text>
      </View>
    );
  };
  const Interest = () => {
    return (
      <View>
        <Text>Interest frame</Text>
      </View>
    );
  };
  const Others = () => {
    return (
      <View>
        <Text>other frame</Text>
      </View>
    );
  };
  const Reference = () => {
    return (
      <View>
        <Text>Reference frame</Text>
      </View>
    );
  };

  const content = [
    {
      id: 0,
      framname: "About Me",
      frame: [<Aboutme />],
    },
    {
      id: 1,
      framname: "Experience",
      frame: [<Experience />],
    },
    {
      id: 2,
      framname: "Education",
      frame: [<Education />],
    },
    {
      id: 3,
      framname: "Projects",
      frame: [<Projects />],
    },
    {
      id: 4,
      framname: "Skills",
      frame: [<Skills />],
    },

    {
      id: 5,
      framname: "Award",
      frame: [<Award />],
    },
    {
      id: 6,
      framname: "Language",
      frame: [<Language />],
    },
    {
      id: 7,
      framname: "Interest",
      frame: [<Interest />],
    },
    {
      id: 8,
      framname: "Others",
      frame: [<Others />],
    },
    {
      id: 9,
      framname: "Reference",
      frame: [<Reference />],
    },
  ];
  const OnSelection = (selected) => {
    SetRendered(true);
    setI(selected.id);
    console.log("s--->", selected.id);
  };
  const EmptyView = () => {
    return (
      <View>
        <Text>Hello,Select a section to find out about me</Text>
      </View>
    );
  };

  const [isRendered, SetRendered] = useState(false);
  const [i, setI] = useState(1);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: 100,
          height: 20,
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          marginRight: SIZES.padding,
          ...styles.shadow,
        }}
        onPress={() => OnSelection(item)}
      >
        <Text
          style={{
            marginTop: SIZES.padding,
            color: COLORS.white,
            ...FONTS.body5,
          }}
        >
          {item.framname}
        </Text>
      </TouchableOpacity>
    );
  };

  console.log("content", content[0].frame[0]);
  return (
    <SafeAreaView>

      <ScrollView>
      <View style={styles.container}>
        <Avatar rounded source={icons.me} size="large" />
        <View style={styles.headercontainer}>
          <Text style={{ ...FONTS.h3 }}>Terrece Manaka</Text>
          <Text style={{ ...FONTS.body4 }}>Software Developer</Text>
        </View>
      </View>
      <FlatList
        data={content}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.if}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
        {!isRendered ? <EmptyView /> : content[i].frame[0]}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginBottom: 5,
    color:COLORS.white,
  },
  headercontainer: {
    marginLeft: 20,
  },
  contentContainer:{
      padding:10,
      backgroundColor:COLORS.backdrop,
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
  },
});

export default About;
