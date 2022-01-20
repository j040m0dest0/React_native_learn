import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-web';



  // Views funcionam como divs para demarcar o conteúdo
  
const HelloWorldApp = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />

      <Button style={{
          height: 10,
          borderColor: 'blue',
          borderWidth: 1
        }}
        />
    </ScrollView>
  );
}


export default HelloWorldApp;
