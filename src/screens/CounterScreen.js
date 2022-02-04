import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.textStyle}>Count: {counter}</Text>
            <View style={{ flexDirection: "row" }}>
                <Button onPress={() => {
                    setCounter(counter + 1);
                }} title="Add"></Button>
                <Button onPress={() => {
                    setCounter(counter - 1);
                }} title="Decrease"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 42,
        textAlign: 'center'
    },
})

export default CounterScreen;