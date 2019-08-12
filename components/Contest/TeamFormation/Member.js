import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import{ListItem, Icon} from 'react-native-elements'


keyExtractor = (item, index) => index.toString()

export default class MemberList extends Component {

    state={
        members:[
            {
                name: 'Username',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Captain'
            },
            
            {
                name: '',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'teammate',
                status:"Not invited"
            },
        
        ]
    }

    emailInputHandler=(event)=>{

    }

    renderAddIcon(member) {
        if (member=='teammate')
            return <Icon name={'add'} size={20}/>
        else
            return null;
    }

    renderUsernameInput(status){
        if (status=="Not invited")
            return <input type="text"/>
    }

    ListItem = ({item}) => (
    <ListItem
        containerStyle={styles.listItem}
        title={item.name}
        leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        }}
    />
)

    render () {
        return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.members}
            renderItem={this.ListItem}
          />
        )
      }
}

const styles = StyleSheet.create({
    
    listContainer:{
        flex:1,
    },
 

    listItem: {
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderRadius: 20,
        height: 100
        
      },
    
});
