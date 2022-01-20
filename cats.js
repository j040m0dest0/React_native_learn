import React from 'react';
import { Text } from 'react-native';
import getFullName from './getName';




const Cat = () => {
    // const nome = "joão"
  return (
    <Text>Hello, I am {getFullName("Articuno", "Zaptos", "Moltres")}!</Text>
  );
}

export default Cat;