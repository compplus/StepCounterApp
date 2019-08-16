import React, { Component } from 'react';
import { Images } from '../assets/assets'
import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { scale, moderateScale, verticalScale } from '../components/Scaling';

export default class SplashScreen extends Component {

    render() {
        return <ImageBackground source={Images['splash']} style={styles.container}>
        </ImageBackground>
    };
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        flex: 1, 
        height: scale(50),
        width: scale(250),
    },
});
