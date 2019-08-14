import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

const MemberList = props => {

    keyExtractor = (item, index) => index.toString()

    /*renderStatus = (item) => {
        if (item.status=='inviting'){
            return 
        }
    }*/

    renderItem = ({ item }) => (
        <ListItem
            containerStyle={styles.listItem}
            title={item.email}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
            }}
            /*rightIcon={renderStatus(item.status)}*/
        />
    )
    return (
        <FlatList
            keyExtractor={this.keyExtractor}
            data={props.members}
            renderItem={this.renderItem}
        />
    )
}

const styles = StyleSheet.create({

    listContainer: {
        flex: 1,
    },


    listItem: {
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 20,
        height: 100

    },

});

export default MemberList;
