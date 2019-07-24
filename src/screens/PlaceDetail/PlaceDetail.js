import React from 'react'
import {View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = props => {

    return (
            <View style={styles.modalContainer}>
                <Image style={styles.placeImg} source={props.selectedPlace.img}/>
                <Text>
                    {props.selectedPlace.name}
                </Text>
                <View>
                    <Button title={'Delete'} color={'red'} onPress={props.onItemDelete}/>
                </View>
            </View>
    )

};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImg: {
        width: 40,
        height: 40
    }
});

export default PlaceDetail
