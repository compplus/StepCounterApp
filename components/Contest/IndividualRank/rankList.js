import React, { Component } from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';

const flatListData = [

    {
        "Rank": "1",
        "ID": "HKU",
        "Steps": "99,999"
    },
    {
        "Rank": "2",
        "ID": "CU",
        "Steps": "10,000"
    },
    {
        "Rank": "3",
        "ID": "HKUST",
        "Steps": "5,000"
    },
    {
        "Rank": "4",
        "ID": "PolyU",
        "Steps": "2,500"
    },
    {
        "Rank": "5",
        "ID": "BU",
        "Steps": "1,250"
    }
]

const extractKey = ({Rank}) => Rank

export default class RankList extends Component {
    
    ListItem = ({item}) => {
       return (
        <View style={styles.listItem}>
          <Text>{item.Rank}</Text>
          <Text>{item.ID}</Text>
          <Text>{item.Steps}</Text>
        </View>
       )
    }

    render(){
        return (
            <FlatList
            style={StyleSheet.listContainer}
            data={flatListData}
            renderItem={this.ListItem}
            keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer:{
        flex:1
    },

    listItem: {
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
      },
    
      rank: {
        flex: 1,
      },
    
      ID: {
        flex: 1,
      },
    
      Steps: {
        flex: 1,
      }
    
});
