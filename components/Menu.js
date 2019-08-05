import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground
} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { Images } from '../assets/assets.js'

const window = Dimensions.get('window');

export default class Menu extends Component {

  menuItem = ({ item }) => {
    const { onItemSelected, selected } = this.props
    const isSelected = (item.screen == selected)
    const color = isSelected ? '#008000' : 'rgb(50,50,50)'

    return (
      <Button
        icon={
          <Icon
            {...item.icon}
            color={color}
            size={25}
          />
        }
        raised={isSelected}
        buttonStyle={styles.button}
        titleStyle={{ color: color, marginLeft: 10 }}
        title={item.title}
        backgroundColor="transparent"
        onPress={() => { onItemSelected(item.screen) }}
      />)
  }

  render() {
    const userName = "username"
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.HeadImage} source={Images['header_image']} resizeMode='cover'>
          <Text style={styles.userName}>{userName}</Text>
        </ImageBackground>
        <FlatList
          style={styles.container}
          data={screensOnMenu}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={this.menuItem}
          extraData={this.props}
        />
      </View>
    );
  }
}

const screensOnMenu = [{ screen: "In", title: 'Home', icon: { name: 'home' } },
{ screen: "Info", title: 'Profile', icon: { name: 'heartbeat', type: 'font-awesome' } },
{ screen: "Awards", title: 'Awards', icon: { name: 'trophy', type: 'font-awesome'} },
{ screen: "Setting", title: 'Setting', icon: { name: 'settings' } }]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "transparent",
    justifyContent: 'flex-start',
    marginVertical: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  HeadImage: {
    height: 150
  },
  userName: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    fontWeight: '500',
    position: 'absolute',
    bottom: '10%',
    left: '10%'
  }
});
