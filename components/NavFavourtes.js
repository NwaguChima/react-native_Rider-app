import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
];

const NavFavourtes = () => {
  return (
    <View>
      <Text>NavFavourtes</Text>
    </View>
  );
};

export default NavFavourtes;

const styles = StyleSheet.create({});
