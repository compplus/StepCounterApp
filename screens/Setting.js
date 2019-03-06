import React, {Component} from 'react'
import {View, StyleSheet, Text,Image,Alert} from 'react-native'
import SettingsList from 'react-native-settings-list';
import { Images } from '../assets/assets'

export default class Setting extends Component{
  state={switchValue:false}
  onValueChange=(value)=>{
    this.setState({switchValue: value});
  }
	render(){
		var bgColor = '#DCE3F4';

  	return(
      <View style={styles.container}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={
                <Image style={styles.imageStyle} source={Images['settings']}/>
            }
            hasSwitch={true}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasNavArrow={false}
            title='Airplane Mode'
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Wi-Fi'
            titleInfo='Bill Wi The Science Fi'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Wifi Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Blutooth'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Cellular'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Personal Hotspot'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Control Center'
            onPress={() => Alert.alert('Route To Control Center Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Do Not Disturb'
            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='General'
            onPress={() => Alert.alert('Route To General Page')}
          />
          <SettingsList.Item
            icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Display & Brightness'
            onPress={() => Alert.alert('Route To Display Page')}
          />
        </SettingsList>
      </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#EFEFF4'
  },
  imageStyle:{
    alignSelf:'center',height:40, width:40
  },
  titleInfoStyle:{}
})
