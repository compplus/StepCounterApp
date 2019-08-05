import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Platform} from 'react-native';
import {please, L_, not, gentle_calmm, mark, S} from 'camarche'

import {logged_in} from '../api'

import {Header} from 'react-native-elements'
import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import Info from '../components/Entry/Info';
import Setting from './Setting/Setting'
import In from '../components/Entry/In'
import SettingSync from './Setting/SettingSync'
import SettingGoal from './Setting/SettingGoal'
import SettingUnits from './Setting/SettingUnits'
import SettingTheme from './Setting/SettingTheme'
import SettingAbout from './Setting/SettingAbout'

const screens={Info,Setting,In,SettingSync,SettingGoal,SettingUnits,SettingTheme,SettingAbout}
const screenTitle={In:'Home',Info:'Info',Setting:'Setting'}

export default gentle_calmm (class Entry extends Component{
	state={isOpen: false,screen:'In'}
	go=(screen)=>{
		if(screen in screens){
			this.setState({screen})
		}else{
			this.props.go(screen)
		}
	}
	back=()=>{
		let screen=this.state.screen
		if(screen=='In'){
			please (L_ .set (false)) (logged_in)
		}else{
			this.go('In')
		}
	}
	onMenuItemSelected = item => {
		this.setState({isOpen: false})
		this.go(item)
	}
	updateMenuState=(isOpen)=>{
		this.setState({isOpen})
	}

	render() {
		var self = this
		/*var $__log_out_transition = S (_ => {
			if (not (mark (logged_in))) {
				self .go ('Login') } })*/

		var screenName = this.state.screen
		var ActiveScreen = screens[screenName]
		let screenIsIn = screenName=='In'
		let isSettingSon = /Setting.+/.test(screenName)
		return (
		<SideMenu
		menu={<Menu screenTitle={screenTitle} selected={screenName} onItemSelected={this.onMenuItemSelected}/>}
		isOpen={this.state.isOpen}
		onChange={isOpen => this.updateMenuState(isOpen)}
		>
			<View style={styles.container}>
				 <Header
					containerStyle={styles.header}
					backgroundColor='black'
					leftComponent={{ icon: isSettingSon?'arrowleft':'menu',type:isSettingSon?'antdesign':'material', color: '#fff' ,
					onPress:()=>{
						if(isSettingSon){
							this.go('Setting')
						}else{
							this.updateMenuState(!this.state.isOpen)
						}
					}
					}}
					centerComponent={{ text: screenTitle[screenName], style: { color: '#fff',fontWeight:'bold' } }}
					rightComponent={{ icon: screenIsIn?'logout':'home',type:screenIsIn?'antdesign':'material', color: '#fff' ,onPress:this.back}}
				 />
				<ActiveScreen go={this.go}/>
			</View>
		</SideMenu>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header:{
		borderBottomWidth:0,
		marginTop:Platform.OS === 'ios' ? 0 : - 30
	}
});
