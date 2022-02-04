import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen: Tobias</Text>
      <Text style={styles.text2}>Hello!!</Text>
      <Button
        title="Go to Component Demo"
        onPress={() => navigation.navigate("Component")}>
      </Button>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}>
      </Button>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}></Button>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}></Button>
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
