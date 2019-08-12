import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import MemberList from '../../components/Contest/TeamFormation/Member';

export default class TeamFormation extends Component {

    /*state = {
        members=[
            {
                email: "Type new member's email",
                status: 
            }
        ]
    }*/
    render() {
 
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>
                        Team Formation
                    </Text>
                </View>

                <View style={styles.memberList}>
                    <MemberList/>
                </View>

            </View>
            )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#171D33',
    },

    pageTitle: {
        flex: 1,
        backgroundColor: '#1F1F20',
        flexDirection: 'column-reverse'
    },

    memberList: {
        flex: 6,
    },

    titleText:{
        textAlign: 'left',
        fontSize:40,
        fontFamily: 'Gill Sans',
        color: 'white',
        fontWeight:'500',
        marginBottom:10,
        marginLeft:10
    }

});
