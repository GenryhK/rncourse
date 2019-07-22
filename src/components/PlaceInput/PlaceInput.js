import React, {Component} from 'react'
import {Button, TextInput, View, StyleSheet} from "react-native";

class PlaceInput extends Component {
    state = {
        placeName: '',
    };

    placeNameChangeHandler = (val) => {
        this.setState({placeName: val})
    };

    placeSubmitHandler = (val) => {
        if (this.state.placeName.trim() === '') {
            return
        }

        this.props.onPlaceAdded(this.state.placeName)

    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    placeholder={"lalala"}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}/>
                <Button
                    style={styles.placeButton}
                    title={"add"}
                    onPress={this.placeSubmitHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '40%'
    },
});

export default PlaceInput
