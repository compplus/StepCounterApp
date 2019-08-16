import React, { Component } from 'react';

import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Pedometer } from "expo"

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = { steps: 0, };
    }

    componentDidMount() {
        Pedometer.watchStepCount(result => {
            this.setState({ steps: result.steps });
        })
    }

    renderStepCounts() {
        return <View style={styles.container}>
            <Image
                source={require('./../assets/main_page/logo.png')}
                style={styles.headerimage}>
            </Image>

            <Text style={styles.steps}>
                You've walked
                <Text style={styles.highlight}> {this.state.steps} steps </Text>
                today.
            </Text>

        </View>
    }

    render() {
        return <View style={{ ...styles.container }}>
            {this.renderStepCounts()}
        </View>
    }
}


const { width, height } = Dimensions.get('window')

const styles = {
    container: {
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerimage: {
        height: 100 / 1.2,
        width: 250 / 1.2,
        flex: 1,
        marginBottom: 15,
    },

    steps: {
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        color: '#7ADAE9',
        fontFamily: 'Gill Sans',
        justifyContent: 'center'
    },
    
    highlight: {
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Gill Sans',
        justifyContent: 'center'
    },
}
