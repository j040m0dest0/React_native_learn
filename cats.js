import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-web';
// import getFullName from './getName';

const Cat = (props) => {
    // const nome = "joão"
  return (

       <Text>Hello, I am {props.name}!</Text>
  
  );
}

const Cafe = () =>{
    return (
        <View>
            <Text>Welcome!</Text>
            <Cat name="Jotaro"/>
            <Cat name="Dio"/>
            <Cat name="Joestar"/>
            <Cat name="Giorno"/>
            <Cat name="Joseph"/>
        </View>
    );
}



// export default Cat;
export default Cafe;