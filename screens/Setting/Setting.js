import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Alert } from 'react-native'
import SettingsList from 'react-native-settings-list';
import { Images } from '../../assets/assets'

export default class Setting extends Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }
  render() {
    var bgColor = '#DCE3F4';
    var nav_screen = this.props.go

    return (
      <View style={styles.container}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          {/*<SettingsList.Header headerText='PREFERENCES' headerStyle={styles.headerStyle} />
          <SettingsList.Item
            //icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Syncronization'
            titleInfo='Daily'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => nav_screen('SettingSync')}
          />
          <SettingsList.Item
            //icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Goal'
            titleInfo='10000 Steps'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => nav_screen('SettingGoal')}
          />
          <SettingsList.Item
            //icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Units'
            titleInfo='Kilometer (km)'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => nav_screen('SettingUnits')}
          />
          <SettingsList.Item
            //icon={<Image style={styles.imageStyle} source={Images['settings']}/>}
            title='Theme'
            titleInfo='Light'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => nav_screen('SettingTheme')}
          />*/}
          
          <SettingsList.Header headerText='ACCOUNT' headerStyle={styles.headerStyle} />
          <SettingsList.Item
            title='Change Password'
            hasNavArrow={false}
          //onPress={() => }
          />
          <SettingsList.Item
            title='Submission History'
            hasNavArrow={false}
          //onPress={() => }
          />
          <SettingsList.Header headerText='SUPPORT' headerStyle={styles.headerStyle} />
          <SettingsList.Item
            title='Help'
            hasNavArrow={false}
          //onPress={() => }
          />
          <SettingsList.Item
            title='Contact Us'
            hasNavArrow={false}
          //onPress={() => }
          />
          <SettingsList.Header headerStyle={{ marginTop: 15 }} />
          <SettingsList.Item
            title='About'
            hasNavArrow={false}
            onPress={() => nav_screen('SettingAbout')}
          />
        </SettingsList>
      </View>
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
  headerStyle: {
    marginTop: 15,
    marginLeft: 15,
    color: 'gray'
  },
  imageStyle: {
    alignSelf: 'center',
    marginLeft: 15,
    height: 40,
    width: 40
  },
  titleInfoStyle: {}
})
