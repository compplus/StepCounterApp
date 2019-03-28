import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import SettingsList from 'react-native-settings-list';

export default class SettingAbout extends Component{
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }
	render(){
		var bgColor = '#DCE3F4';

  	return(
      <View style={styles.container}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.headerStyle}/>
          <SettingsList.Item
            title='Contact Us'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Terms and Conditions'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Privacy Policy'
            hasNavArrow={false}
            //onPress={() => }
          />
        </SettingsList>

        <View style={styles.bottomBox}>
          <SettingsList borderColor='transparent' defaultItemSize={50}>
            <SettingsList.Item
              title='Version 1.0.1'
              hasNavArrow={false}
              titleStyle={styles.versionStyle}
              backgroundColor='transparent'
              itemWidth={15}
              //onPress={() => }
            />
            <SettingsList.Item
              title='2019 HKU Centre for Sports and Exercise. All rights reserved.'
              hasNavArrow={false}
              titleStyle={styles.rightReserveStyle}
              backgroundColor='transparent'
              itemWidth={15}
              //onPress={() => }
            />
          </SettingsList>
        </View>
      </View>
		)
	}
  onValueChange(value){
    this.setState({switchValue: value});
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor:'#EFEFF4'
  },
  bottomBox: {
    paddingBottom: 500,
  },
  versionStyle: {
    color: 'gray',
    fontSize: 11,
    paddingTop: 5
  },
  rightReserveStyle: {
    color: 'gray',
    fontSize: 11,
  }
})
