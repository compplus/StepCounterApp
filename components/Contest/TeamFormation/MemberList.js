import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import Icon_ion from 'react-native-vector-icons/Ionicons';

const MemberList = props => {

    keyExtractor = (item, index) => index.toString()

    renderStatus = (status) => {
        if (status == 'inviting') {
            return <Icon_ion
                name='ios-time'
                size={30}
            />;
        }

        else if (status == 'accepted') {
            return <Icon
                name='check'
                color='green'
                size={20}
            />;
        }
    }

    renderItem = ({ item }) => (
        <ListItem
            containerStyle={{
                padding: 10,
                backgroundColor: "#eee",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
                borderRadius: 20,
                height: 100,
                opacity: item.status == 'inviting' ? 0.5 : 1.0,
            }}
            title={item.email}
            leftAvatar={{
                source: item.avatar_url && { uri: item.avatar_url },
            }}
            rightIcon={renderStatus(item.status)}
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
