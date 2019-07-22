import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = props => {
    let modalContent = null

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.placeImg} source={props.selectedPlace.img}/>
                <Text>
                    {props.selectedPlace.name}
                </Text>
            </View>
        )
    }

    return (
        <Modal
            onRequestClose={props.onItemClose}
            visible={props.selectedPlace !== null}
            animationType={'slide'}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title={'Delete'} color={'red'} onPress={props.onItemDelete}/>
                    <Button title={'Close'} onPress={props.onItemClose}/>
                </View>
            </View>
        </Modal>
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
