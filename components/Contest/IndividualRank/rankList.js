import React, { Component } from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View} from 'react-native';

const flatListData = [

    {
        "Rank": "1",
        "ID": "HKU",
        "Steps": "99,999,999,999"
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
          <Text style={styles.rank}>{item.Rank}</Text>
          <Text style={styles.ID}>{item.ID}</Text>
          <Text style={styles.Steps}>{item.Steps}</Text>
        </View>
       )
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "97%",
              backgroundColor: "#CED0CE",
              marginLeft: "3%"
            }}
          />
        );
      };

    render(){
        return (
            <FlatList
            style={StyleSheet.listContainer}
            data={flatListData}
            renderItem={this.ListItem}
            keyExtractor={extractKey}
            ItemSeparatorComponent={this.renderSeparator}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
    },

    listItem: {
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
      },
    
      rank: {
        flex:1,
        padding:10,
        alignSelf: 'flex-start',
        fontFamily: 'Gill Sans'
      },
    
      ID:{
        flex:6,
        textAlign: 'left',
        padding:10,
        fontFamily: 'Gill Sans'
    },
    
      Steps:{
        flex:4,
        padding:10,
        textAlign: 'right',
        fontFamily: 'Gill Sans'
    },
    
});
