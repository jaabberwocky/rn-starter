import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Text style={styles.text}>HomeScreen: Tobias</Text>
      <Text style={styles.text2}>Hello!!</Text>
    </React.Fragment>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 44,
  },
  text2: {
    fontSize: 32,
  }
});

export default HomeScreen;
