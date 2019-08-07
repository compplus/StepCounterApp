import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image, } from 'react-native';
import RankList from "../../components/Contest/IndividualRank/rankList"

export default class IndiRank extends Component {
    state = {
        
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.individualRank}>
                    <View style={styles.yourRank}/>
                    <View style={styles.totalSteps}/>
                </View>
                <View style={styles.title} />
                <View style={styles.rankList}> 
                    <RankList/>
                        
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#171D33',
        alignItems: 'stretch',
        flexDirection: 'column',
    },

    individualRank: {
        flex: 1.5,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: "stretch"
    },

    yourRank:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'green',
    },

    totalSteps:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:'purple',
    },

    title: {
        flex: 0.5,
        backgroundColor: 'red'
    },

    rankList: {
        flex: 8,
        backgroundColor: 'skyblue'
    },

});
