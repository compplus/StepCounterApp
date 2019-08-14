import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import {gentle_calmm} from 'camarche'

export default class ContestMain extends Component {
    teamRank = () => {
        alert("Team Rank!");
    }

    teamForm = () => {
        alert("Team Formation!"); 
    }

    render() {
        var go = this.props.go
 
        return (
            <View style={styles.container}>
                <View style={styles.individualRank}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => go('IndiRank')}>
                        <Image 
                               source={require('./../../assets/contest_page/individual_rank_edit.jpg')} 
                               style={styles.imageClass}>
                        </Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.teamRank}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => go('TeamRank')}>
                        <Image source={require('./../../assets/contest_page/team_rank_edit.jpg')} style={styles.imageClass}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.teamFormation}>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => go('TeamForm')}>
                        <Image source={require('./../../assets/contest_page/team_formation_edit.jpg')} style={styles.imageClass}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
    },

    individualRank: {
        flex: 1,
        margin: 5,
        marginTop: 10
    },

    teamRank: {
        flex: 1,
        margin: 5,
    },

    teamFormation: {
        flex: 1,
        margin: 5,
    },

    imageClass: {
        flex: 1,
        height: 400,
        width: 400,
        borderRadius: 20,
    },

});
