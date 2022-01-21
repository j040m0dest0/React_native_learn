import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: "https://seeklogo.com/images/S/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png"}}
        style={{width: 300, height: 300}}
      />

      <Text>I am spider man brou!</Text>
    </View>
  );
}

export default CatApp;