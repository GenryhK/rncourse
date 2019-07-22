import React from 'react'

import {View, Text, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

const listItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image source={props.placeImg} style={styles.placeImg}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        margin: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImg: {
        marginRight: 8,
        width: 30,
        height: 30,
    }
});

export default listItem
