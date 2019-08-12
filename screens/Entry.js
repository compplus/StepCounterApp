import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Platform } from 'react-native';
import { please, L_, not, gentle_calmm, mark, S } from 'camarche'

import { logged_in } from '../api'
import { Header } from 'react-native-elements'
import { ButtonGroup } from 'react-native-elements';
import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import Info from '../components/Entry/Info';
import Awards from './Awards';
import Setting from './Setting/Setting'
import In from '../components/Entry/In'
import SettingSync from './Setting/SettingSync'
import SettingGoal from './Setting/SettingGoal'
import SettingUnits from './Setting/SettingUnits'
import SettingTheme from './Setting/SettingTheme'
import SettingAbout from './Setting/SettingAbout'
import Main from './Main'
import Contest from './Contest/ContestMain'
import IndiRank from './Contest/IndividualRank'
import TeamForm from './Contest/TeamFormation'
import TeamRank from './Contest/TeamRank'

const screens = { Main, Contest, IndiRank, TeamForm, TeamRank, Info, Awards, Setting, In, SettingSync, SettingGoal, SettingUnits, SettingTheme, SettingAbout }
const screenTitle = { In: 'Home', Info: 'Info', Awards: 'Awards', Setting: 'Setting' }
var tabs = [{ Main }, { Contest }]

export default gentle_calmm(class Entry extends Component {
	state = { isOpen: false, screen: 'Main', tab_name: 'Main' }
	go = (screen) => {
		if (screen in screens) {
			this.setState({ screen })
		} else {
			this.props.go(screen)
		}
	}
	back = () => {
		please(L_.set(false))(logged_in)
		this.go('Login')
	}
	onMenuItemSelected = item => {
		this.setState({ isOpen: false })
		this.go(item)
	}
	updateMenuState = (isOpen) => {
		this.setState({ isOpen })
	}

	render() {
		var self = this
		/*var $__log_out_transition = S (_ => {
			if (not (mark (logged_in))) {
				self .go ('Login') } })*/

		var screenName = this.state.screen
		var ActiveScreen = screens[screenName]
		let screenIsIn = screenName == 'In' 
		let isSettingSon = /Setting.+/.test(screenName)

		var tab_name = this.state.tab_name
		var go = this.props.go
		var ActiveTab = tab_of(tab_name)

		return (
			<SideMenu
				menu={<Menu screenTitle={screenTitle} selected={screenName} onItemSelected={this.onMenuItemSelected} />}
				isOpen={this.state.isOpen}
				onChange={isOpen => this.updateMenuState(isOpen)}
			>
				<View style={styles.container}>
					<Header
						containerStyle={styles.header}
						backgroundColor='black'
						leftComponent={{
							icon: isSettingSon ? 'arrowleft' : 'menu', type: isSettingSon ? 'antdesign' : 'material', color: '#fff',
							onPress: () => {
								if (isSettingSon) {
									this.go('Setting')
								} else {
									this.updateMenuState(!this.state.isOpen)
								}
							}
						}}
						centerComponent={{ text: screenTitle[screenName], style: { color: '#fff', fontWeight: 'bold' } }}
						rightComponent={{ icon: 'logout', type: 'antdesign', color: '#fff', onPress: this.back }}
					/>
					<ActiveScreen go={this.go} />
					<ButtonGroup
					onPress={(i) => { this.go(tab_names[i]), this.setState({ tab_name: tab_names[i] }) }}
					selectedIndex={tab_name_index(tab_name)}
					buttons={tab_names}
					containerStyle={{}} />
				</View>
			</SideMenu>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		borderBottomWidth: 0,
		marginTop: Platform.OS === 'ios' ? 0 : - 30
	}
});

var only_key = x => Object.keys(x)[0]

var tab_of = tab_name => Object.values(tabs.filter(x => only_key(x) === tab_name)[0])[0]
var tab_names = tabs.map(only_key)
var tab_name_index = tab_name => tab_names.indexOf(tab_name)
