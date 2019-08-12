import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Text, Button } from 'react-native';
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
    
    userNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
      };

    nameSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
          return;
        }
    }

    render() {
 
        return (
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.titleText}>
                        Team Formation
                    </Text>
                </View>

                <View style={styles.userInput}>
                    
                    <TextInput
                     style={{width:300, 
                            borderColor:'black',
                            backgroundColor:'white', 
                            borderWidth:1}}
                     placeholder="Enter new member's email"
                     onChangeText={this.userNameChangedHandler}
                    />

                    <Button
                            title="Add"
                            style={styles.addButton}
                            onPress={this.placeSubmitHandler}
                    />

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

    userInput:{
        flex:0.4,
        alignSelf: 'center',
        marginTop: 20
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

    addButton: {
        width: "30%"
      }

});
