import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class MemberInput extends Component {

    state =
        {
            email: '',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'teammate'
        }

    componentDidMount() {

    }

    memberEmailChangedHandler = val => {
        this.setState({
            email: val,
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'teammate',
            status: 'inviting'
        });
    };

    memberSubmitHandler = () => {
        if (this.state.email.trim() === "") {
            return;
        }

        this.props.onMemberAdded(this.state);
    };

    render() {
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.memberInput}
                    placeholder="Enter new member's email"
                    onChangeText={this.memberEmailChangedHandler}
                />

                <Button
                    title="Add"
                    style={styles.addButton}
                    onPress={this.memberSubmitHandler}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({

    inputContainer: {
        flex: 0.4,
        width: "100%",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    memberInput: {
        backgroundColor: "white",
        width: "80%",
        height: "80%"
    },

    addButton: {
        width: "30%"
    }

})

export default MemberInput;
