import React, { Component } from 'react'
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native'
import { scale, moderateScale, verticalScale } from '../../components/Scaling';
import SettingsList from 'react-native-settings-list';

const { width, height } = Dimensions.get('window');

export default class SettingAbout extends Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }
  render() {
    var bgColor = '#DCE3F4';

    return (
      <View style={styles.container}>

      <View style={styles.aboutbox}>
        <Image
            style={styles.image}
            source={require('../../assets/setting_page/CSE_logo.png')} 
            resizeMode='center'
        />

        <View style={styles.parawrapper}>
          <Text style={styles.paragraph}>To-do: paragraph</Text>
        </View>
      </View>

      <View style={styles.bottomBox}>
        <Text style={styles.versionStyle}>Version 1.0.1</Text>
        <Text style={styles.rightReserveStyle}>2019 HKU Centre for Sports and Exercise. All rights reserved.</Text>
      </View>

      </View >
		)
  }
  onValueChange(value) {
    this.setState({ switchValue: value });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  },
  aboutbox: { 
    height: scale(height * 0.62),
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#CFD8DC',
    borderTopWidth: 1.0,
    borderBottomColor: '#CFD8DC',
    borderBottomWidth: 1.0,
    //padding: 20,
    paddingBottom: 10,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    height: scale(150),
    width: scale(150),
  
  },  

  parawrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: '#424242',
  },
  bottomBox: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  versionStyle: {
    color: 'gray',
    fontSize: 11,
  },
  rightReserveStyle: {
    color: 'gray',
    fontSize: 11,
  }
})
