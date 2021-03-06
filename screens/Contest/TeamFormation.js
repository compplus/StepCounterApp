import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button } from 'react-native';
import MemberList from '../../components/Contest/TeamFormation/MemberList';
import MemberInput from '../../components/Contest/TeamFormation/MemberInput';
import DialogInput from 'react-native-dialog-input';
import { scale } from '../../components/Scaling';

export default class TeamFormation extends Component {

    state = {
        members: [
            {
                memberID: 1,
                email: 'Username',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                status: 'Captain'
            },
        ]
    }

    memberAddedHandler = member => {
        this.setState(prevState => {
            return {
                members: prevState.members.concat(
                    member
                )
            };
        });
    };

    render() {

        counter = this.state.members.length

        function disableAdd(counter) {
            if (this.counter == 5) {
                return true
            }
        }

        return (
            <View style={styles.container}>

                <View style={styles.inputReminderWrapper}>
                    <MemberInput
                    style={styles.memberInput}
                    onMemberAdded={this.memberAddedHandler}
                    disableAdd={disableAdd()}
                    />
                    <Text style={styles.reminder}>
                    *5 members are required to form a team*
                    </Text>
                </View>

                <View style={styles.memberList}>
                    <MemberList
                        members={this.state.members}
                    />
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingHorizontal: 10,
        flexDirection: 'column'
    },


    reminder:{
       
        color:'#FFFFFF',
        marginTop:scale(40),
        textAlign:'center'
    },
    memberInput: {
        
    },

    memberList: {
       
    },

});
