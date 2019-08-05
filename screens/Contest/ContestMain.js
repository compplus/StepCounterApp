import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image } from 'react-native';

export default class ContestMain extends Component {
    render() {
        return (
            <ParentView style={styles.container}>
                <IndiRankView style={styles.individualRank} />
                <TeamRankView style={styles.teamRank} />
                <TeamFormView style={styles.teamFormation} />
            </ParentView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#171D33',
        alignItems: 'center'
    },

    individualRank: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    teamRank: {
        flex: 1,
        backgroundColor: 'red'
    },

    teamFormation: {
        flex: 1,
        backgroundColor: 'skyblue'
    },

});
