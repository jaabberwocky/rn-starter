import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: getRandomInt(10, 100) },
        { name: "Friend #2", age: getRandomInt(10, 100) },
        { name: "Friend #3", age: getRandomInt(10, 100) },
        { name: "Friend #4", age: getRandomInt(10, 100) },
        { name: "Friend #5", age: getRandomInt(10, 100) },
        { name: "Friend #6", age: getRandomInt(10, 100) },
        { name: "Friend #7", age: getRandomInt(10, 100) },
        { name: "Friend #8", age: getRandomInt(10, 100) },
        { name: "Friend #9", age: getRandomInt(10, 100) },
        { name: "Friend #10", age: getRandomInt(10, 100) },
    ]
    return (
        <FlatList
            horizontal={false} // scroll left to right rather than top to bottom
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name.split(" ")[1]}
            data={friends}
            renderItem={({ item }) => {
                // (element) => {item: {name: ...}, index: 0} ...
                // use destructuring to get the "item" of element
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}>
        </FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginLeft: 12,
    }
});

export default ListScreen;