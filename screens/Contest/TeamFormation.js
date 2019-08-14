import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button } from 'react-native';
import MemberList from '../../components/Contest/TeamFormation/MemberList';
import MemberInput from '../../components/Contest/TeamFormation/MemberInput';
import DialogInput from 'react-native-dialog-input';

export default class TeamFormation extends Component {

    state={
        members:[
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
            if(this.counter==5){
                return true
            }
        }
        
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>
                        Team Formation
                    </Text>
                </View>

                <MemberInput style={styles.memberInput} onMemberAdded={this.memberAddedHandler} disableAdd={disableAdd()}/>

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
        backgroundColor: '#171D33',
    },

    pageTitle: {
        flex: 1,
        backgroundColor: '#1F1F20',
        flexDirection: 'column-reverse'
    },

    memberInput:{
        flex:1,
        marginTop: 10
    },
    memberList: {
        flex: 6,
        marginTop: 10
    },

    titleText:{
        textAlign: 'left',
        fontSize:40,
        fontFamily: 'Gill Sans',
        color: 'white',
        fontWeight:'500',
        marginBottom:10,
        marginLeft:10
    },

});
