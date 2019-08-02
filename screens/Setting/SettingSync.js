import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import SettingsList from 'react-native-settings-list';

export default class SettingSync extends Component{
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
            title='Every Hour'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Every 6 Hours'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Every 12 Hours'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Daily'
            hasNavArrow={false}
            //onPress={() => }
          />
          <SettingsList.Item
            title='Manual'
            hasNavArrow={false}
            //onPress={() => }
          />
        </SettingsList>
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
  headerStyle: {
    marginTop:15,
    marginLeft:15,
    color:'gray'
  }
})
