import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen: Tobias</Text>
      <Text style={styles.text2}>Hello!!</Text>
      <Button title="Go to Component Demo" onPress={()=> console.log("Component button pressed")}></Button>
      <TouchableOpacity onPress={()=> console.log("List button pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>)
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
