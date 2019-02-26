import React, { Component } from 'react';

import { StyleSheet, Text, View,  KeyboardAvoidingView, TouchableOpacity,ScrollView} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import { TextField } from 'react-native-material-textfield';

export default class Info extends Component {

    state = {
        faculty: '',
        department: '',
        category: '',
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

                    <Text style={styles.titleText}>
                        Basic Information
                    </Text>

                    <TextField
                        label='Faculty'
                        value={this.state.faculty}
                        onChangeText= {(faculty)=>this.setState({faculty: faculty})}
                    />
                    <TextField
                        label='Department'
                        value={this.state.department}
                        onChangeText={(department)=>this.setState({department: department})}
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
                            }]}

                        onChangeText = {(data)=>this.setState({gender: data})}
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

                    <TouchableOpacity onPress={()=>nav_screen('In')}>
                        <Text style={styles.doitlaterText}>Do it later</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>nav_screen('In')} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },

    wrapper: {
        flex: 1,
        backgroundColor:'#EFEFF4'
    },

    buttonContainer: {
        marginTop: 20,
        backgroundColor: 'rgba(0,51,51,1)',
        paddingVertical: 15,
        borderRadius: 7
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '400',
        fontFamily: 'Gill Sans'
    },

    disclaimer:{
        paddingTop: 20,
        fontSize: 10,
        color: 'grey',
    },

    titleText: {
        textAlign: 'left' ,
        color: '#55DAEE',
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'Gill Sans'
    },

    doitlaterText: {
        fontSize: 13,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Gill Sans',
        marginTop: 10
    }
});
