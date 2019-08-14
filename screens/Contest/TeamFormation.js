import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button } from 'react-native';
import MemberList from '../../components/Contest/TeamFormation/MemberList';
import MemberInput from '../../components/Contest/TeamFormation/MemberInput';

export default class TeamFormation extends Component {

    state={
        members:[
            {
                email: 'Username',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Captain'
            },
        ]
    };

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
 
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>
                        Team Formation
                    </Text>
                </View>

                <MemberInput onMemberAdded={this.memberAddedHandler}/>

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
    },

});
