import React, { Component } from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';
import flatListData from '../../data/flatListData';
import { ListItem } from 'react-native-elements';

export default class RankList extends Component {
    render(){
        return (
            <FlatList
            style={StyleSheet.listContainer}
            data={flatListData}
            renderItem={(info) => (
                <ListItem
                    
                />
            )}
        )
    }
}