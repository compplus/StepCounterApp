import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';

class User {
    constructor(userID, steps) {
        this.userID = userID,
        this.steps = steps;
    }
}

export default class RankList extends React.Component {
    angel = new User("awoo424", 1000);

    constructor(props) {
      super(props);
      this.state = {
        FlatListItems: [
          { id: '1', value: this.angel.userID + "\t\t" + this.angel.steps },
          { id: '2', value: 'B' },
          { id: '3', value: 'C' },
        ],
      };
    }
  
    FlatListItemSeparator = () => {
      return (
        //Item Separator
        <View
          style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
        />
      );
    };
  
    GetItem(item) {
      //Function for click on an item
      Alert.alert(item);
    }
  
    render() {
      return (
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.FlatListItems}
            //data defined in constructor
            ItemSeparatorComponent={this.FlatListItemSeparator}
            //Item Separator View
            renderItem={({ item }) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <View>
                <Text
                  style={styles.item}
                  onPress={this.GetItem.bind(
                    this,
                    'Id : ' + item.id + ' Value : ' + item.value
                  )}>
                  {item.value}
                </Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 30,
    },
  
    item: {
      padding: 10,
      margin: 5,
      fontSize: 18,
      height: 44,
    },
  });
  