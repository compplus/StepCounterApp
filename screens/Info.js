import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View,  KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Avatar } from 'react-native-elements';
import { scale } from '../components/Scaling';
import {items} from '../data/InfoData';


export default class Info extends Component {

    state = {
        faculty: '',
        department: '',
        category: '',
        firstname: '',
        lastname: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
    };

    render() {
        var nav_screen = this.props.go

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
            <ScrollView>
                <View style={styles.container}>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: scale(30), padding: scale(10), justifyContent: 'center', alignContent: 'center'}}>
                      <Avatar
                        rounded
                        size={scale(65)}
                        icon={{name: 'user', type: 'font-awesome'}}
                      />
                      
                  </View>
                  <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'center', alignContent: 'flex-start'}}>
                      <Text style={styles.username}>Username</Text>
                  </View>
                </View>

                <View style={{ paddingHorizontal: 50, }}> 
                    <Dropdown
                        label='Faculty'
                        data={[{
                              value: 'Faculty of Architecture',
                            }, {
                              value: 'Faculty of Arts',
                            }, {
                              value: 'Faculty of Business and Economics',
                            }, {
                              value: 'Faculty of Dentistry',
                            }, {
                              value: 'Faculty of Education',
                            }, {
                              value: 'Faculty of Engineering',
                            }, {
                              value: 'Faculty of Law',
                            }, {
                              value: 'Li Ka Shing Faculty of Medicine',
                            }, {
                              value: 'Faculty of Science',
                            }, {
                              value: 'Faculty of Social Sciences',
                            }, {
                              value: 'Graduate School',
                            }, {
                              value: 'Others',
                            }]}

                        onChangeText = {(data)=>this.setState({category: data})}
                    />

                    {/*<TextField
                        label='Department'
                        value={this.state.department}
                        onChangeText={(department)=>this.setState({department: department})}
                    />*/}

                    <SearchableDropdown
                      // onTextChange={text => this.setState({department: text})}
                      onItemSelect={{}}

                      containerStyle={{ padding: 0 }}
                      textInputStyle={{
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 0,
                      }}
                      itemStyle={{
                        padding: 10,
                        marginTop: 0,
                        backgroundColor: 'white',
                        borderColor: '#bbb',
                        borderWidth: 0,
                        borderRadius: 0,
                      }}
                      itemTextStyle={{ color: 'black' }}
                      itemsContainerStyle={{ maxHeight: 150 }}
                      items={items}
                      // defaultIndex={2}
                      placeholder="Department"
                      placeholderTextColor = 'grey'
                      resetValue={false}
                      underlineColorAndroid="transparent"
                    />

                    <Dropdown
                        label='Category'
                        data={[{
                              value: 'Staff',
                            }, {
                              value: 'Student',
                            }, {
                              value: 'Alumni',
                            }, {
                              value: 'Other',
                            }]}

                        onChangeText = {(data)=>this.setState({category: data})}
                    />

                    <Text style={styles.disclaimer}>
                        (To improve the accuracy of the data, please provide the following biometric information)
                    </Text>

                    <Dropdown
                        label='Gender'
                        data={[{
                              value: 'Female',
                            }, {
                              value: 'Male',
                            }, {
                              value: 'Other',
                            }]}

                        onChangeText = {(data)=>this.setState({gender: data})}
                    />

                    <TextField
                        label='First Name'
                        value={this.state.firstname}
                        onChangeText={(firstname)=>this.setState({firstname: firstname})}
                    />
                    <TextField
                        label='Last Name'
                        value={this.state.lastname}
                        onChangeText={(lastname)=>this.setState({lastname: lastname})}
                    />
                    <TextField
                        label='Age'
                        value={this.state.age}
                        onChangeText={(age)=>this.setState({age: age})}
                    />
                    <TextField
                        label='Height (cm)'
                        value={this.state.height}
                        onChangeText={(height)=>this.setState({height: height})}
                    />
                    <TextField
                        label='Weight (kg)'
                        value={this.state.weight}
                        onChangeText={(weight)=>this.setState({weight: weight})}
                    />

                    <TouchableOpacity onPress={()=>null} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#212121',
      flex: 1,
      height: scale(180),
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      //height: height/4 - 20,
      shadowOffset:{  width: 5,  height: 5, },
      shadowColor: '#B0BEC5',
      shadowOpacity: 1.0,
    },

    username: {
      color: '#FFFFFF',
      flexDirection: 'row',
      fontSize: 25,
      fontFamily: 'Gill Sans',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: scale(15),
    },

    wrapper: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#EFEFF4',
        justifyContent: 'center', 
        alignContent: 'stretch'
    },

    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#0097A7',
        paddingVertical: 15,
        borderRadius: 7
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 17,
        fontFamily: 'Gill Sans'
    },

    disclaimer:{
        paddingTop: 20,
        fontSize: 14,
        color: 'grey',
    },

    titleText: {
        textAlign: 'left' ,
        color: 'rgba(0,51,51,1)',
        fontSize: 25,
        fontWeight: "400",
        fontFamily: 'Gill Sans'
    },
});
