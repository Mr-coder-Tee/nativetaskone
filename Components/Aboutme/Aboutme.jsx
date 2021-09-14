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
  Linking,
} from "react-native";
import { COLORS, icons, FONTS, SIZES } from "../../constants";
import { Header, Avatar } from "react-native-elements";

const About = ({ route }) => {
  const loadInBrowser = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  const Aboutme = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          About Me
        </Text>
        <Text style={{ ...FONTS.body4 }}>
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
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <Text>Mlab:Code tribe</Text>
      </View>
    );
  };
  const Education = () => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: COLORS.backdrop,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          EDUCATION
        </Text>
        <Text style={{ ...FONTS.h4 }}>Secondary Education:</Text>
        <Text style={{ ...FONTS.body4 }}>Makgofe high school</Text>
        <Text style={{ ...FONTS.body4 }}>Matric: 2014</Text>
        <Text style={{ ...FONTS.h4 }}>Tartiary Education:</Text>

        <Text style={{ ...FONTS.body4 }}>University of limpopo</Text>
        <Text style={{ ...FONTS.body4 }}>Year: 2020</Text>
        <Text style={{ ...FONTS.body4 }}>
          Bsc Mathematical and computer science Degree
        </Text>
      </View>
    );
  };
  const Projects = () => {
    return (
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <View>
          <Text>
            Count down App:
            <TouchableOpacity
              onPress={() =>
                loadInBrowser("https://thirsty-lamport-853d94.netlify.app/")
              }
            >
              <Text style={{ color: COLORS.bluelink }}>
                {" "}
                https://thirsty-lamport-853d94.netlify.app/
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <Text>
            registration site:
            <TouchableOpacity
              onPress={() =>
                loadInBrowser("https://hardcore-agnesi-65e72d.netlify.app/")
              }
            >
              <Text style={{ color: COLORS.bluelink }}>
                {" "}
                https://hardcore-agnesi-65e72d.netlify.app/
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <Text>
            Portfolio site:
            <TouchableOpacity
              onPress={() =>
                loadInBrowser("https://terrencetebatso-manaka.netlify.app")
              }
            >
              <Text style={{ color: COLORS.bluelink }}>
                {" "}
                https://terrencetebatso-manaka.netlify.app
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <Text>
            Tshirt online shopping site:
            <TouchableOpacity
              onPress={() => loadInBrowser("https://codingtees.netlify.app/")}
            >
              <Text style={{ color: COLORS.bluelink }}>
                {" "}
                https://codingtees.netlify.app/
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
  };
  const Skills = () => {
    return (
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          Skills
        </Text>
        <Text>Data structures and algorithms</Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text>
          Object Oriented programming in java,c++,javascript and python
        </Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text> Software developer</Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text>
          {" "}
          Programming language: Java Python Html Css Javascript React js C++{" "}
        </Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text>
          {" "}
          Frontend: ReactJS React Native Typescript CSS-in-JS (Styled
          Components) AngularJS UI/UX Chrome Developer Tools. jQuery GitHub
          Bootstrap Angular.js
        </Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text>
          {" "}
          Backend: GraphQL REST NodeJS Java Php C# Javascript Databases: MS SQL
          Server MySQL Firestore Firebase realtime database Microsoft SQL Server
        </Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

        <Text> Problem Solving,Decision Making & Team Building</Text>
        <View style={{height:1,backgroundColor:COLORS.black}}></View>

      </View>
    );
  };
  const Interest = () => {
    return (
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          Interests
        </Text>
        <Text>Computer Programming</Text>
        <Text>Drawing</Text>
        <Text>Sports</Text>
        <Text>Video Games</Text>
      </View>
    );
  };
  const Others = () => {
    return (
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          Others
        </Text>
        <Text>Drivers License code 10</Text>
      </View>
    );
  };
  const Reference = () => {
    return (
      <View style={{
        padding: 10,
        backgroundColor: COLORS.backdrop,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
        <Text style={{ ...FONTS.h2, textAlign: "center", marginBottom: 10 }}>
          Reference
        </Text>
        <Text>Tyson Moyahabo</Text>
        <Text>Contacts: tyson@mlab.co.za OR 0786498402</Text>
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
      framname: "Interest",
      frame: [<Interest />],
    },
    {
      id: 6,
      framname: "Others",
      frame: [<Others />],
    },
    {
      id: 7,
      framname: "Reference",
      frame: [<Reference />],
    },
  ];
  const OnSelection = (selected) => {
    SetRendered(true);
    setI(selected.id);
  };
  const EmptyView = () => {
    return (
      <View>
        <Text>Hello,Select a section to find out more about me</Text>
      </View>
    );
  };

  const [isRendered, SetRendered] = useState(false);
  const [i, setI] = useState(1);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
      key={item.id}
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
          keyExtractor={(item) => `${item.id}`}
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
    color: COLORS.white,
  },
  headercontainer: {
    marginLeft: 20,
  },
  contentContainer: {
    padding: 10,
    backgroundColor: COLORS.backdrop,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default About;
