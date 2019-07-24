import React from 'react'
import {StyleSheet, View, FlatList} from 'react-native';

import ListItem from '../../components/ListItem/ListItem';

const PlaceList = props => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem placeName={info.item.name}
                          placeImg={info.item.img}
                          onItemPressed={() => {
                              props.onItemSelected(info.item.key)
                          }}/>
            )} />
    )

};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});


export default PlaceList