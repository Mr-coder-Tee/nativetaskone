import React from "react";
import { SocialIcon } from "react-native-elements";
import { View, Text, TouchableOpacity, Linking } from "react-native";

const Contact = () => {
  const loadInBrowser = (link) => {
    Linking.openURL(link).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={()=>loadInBrowser('https://twitter.com/terrytheecoder')}>
        <SocialIcon title="DM on twitter" button type="twitter" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>loadInBrowser('https://github.com/Mr-coder-Tee')}>
        <SocialIcon title="View Repo" button raised={false} type="github" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>loadInBrowser('https://www.facebook.com/Tebatso-Manaka')}>
        <SocialIcon title="DM on Facebook" button type="facebook" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>loadInBrowser('https://www.linkedin.com/in/terrence-tebatso-manaka-7a25a913a')}>
        <SocialIcon title="View Linkedin profile" button type="linkedin" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>loadInBrowser('https://www.instagram.com/terrence_thee_coder?r=nametag')}>
        <SocialIcon button title="DM on Instagram" type="instagram" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>loadInBrowser('https://wa.me/message/OOIJ6PED2BL3O1"')}>
        <SocialIcon button title="Message on WhatsApp" type="whatsapp" />
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
