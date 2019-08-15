import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Platform } from 'react-native';
import { please, L_, not, gentle_calmm, mark, S } from 'camarche'

import { logged_in } from '../api'
import { Header } from 'react-native-elements'
import { ButtonGroup } from 'react-native-elements';
import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import Info from './Info';
import Awards from './Awards';
import Setting from './Setting/Setting'
import In from '../components/Entry/In'
import SettingSync from './Setting/SettingSync'
import SettingGoal from './Setting/SettingGoal'
import SettingUnits from './Setting/SettingUnits'
import SettingTheme from './Setting/SettingTheme'
import SettingAbout from './Setting/SettingAbout'
import Main from './Main'
import Contest from './Contest/ContestMain';
import IndiRank from './Contest/IndividualRank';
import Map from './Map'
import Analysis from './AnalysisPage'
import TeamForm from './Contest/TeamFormation'
import TeamRank from './Contest/TeamRank'


const screens = { Main, Map, Analysis, Info, Awards, Contest, IndiRank, TeamRank, TeamForm, Setting, In, SettingSync, SettingGoal, SettingUnits, SettingTheme, SettingAbout}
const screenTitle = { Main: 'Home', Contest: 'Contest', IndiRank: 'Individual rank', TeamRank: 'Team Rank', TeamForm: 'Team Formation',
					Info: 'Profile', Awards: 'Awards', Map: 'Map', Analysis: 'Activity', Setting: 'Settings' }
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
		this.props.go('Login')
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
		var tab_name = this.state.tab_name
		var go = this.props.go
		var ActiveTab = tab_of(tab_name)
		let screenIsIn = screenName == 'In'

		let isSettingSon = /Setting.+/.test(screenName)
		let isContestSon = (screenName == 'IndiRank') || (screenName == 'TeamForm') || (screenName == 'TeamRank')
		let isMainSon = (screenName == 'Info') || (screenName == 'Awards') || (screenName == 'Map') || (screenName == 'Analysis') || (screenName == 'Setting')

		return (
			<SideMenu
				//menu={<Menu screenTitle={screenTitle} selected={screenName} onItemSelected={this.onMenuItemSelected} />}
				//isOpen={this.state.isOpen}
				//onChange={isOpen => this.updateMenuState(isOpen)}
				disableGesture={true}
			>
				<View style={styles.container}>
					<Header
						containerStyle={styles.header}
						backgroundColor='black'
						leftComponent={{
							icon: (isSettingSon || isMainSon || isContestSon) ? 'arrowleft' : null, 
							type: (isSettingSon || isMainSon || isContestSon) ? 'antdesign' : null, 
							color: '#fff',
							onPress: () => {
								if (isSettingSon) {
									this.go('Setting')
								}
								else if (isContestSon) {
									this.go('Contest')
								}
								else if (isMainSon) {
									this.go('Main')
								}
								else {
									this.updateMenuState(!this.state.isOpen)
								}
							}
						}}
						centerComponent={{ text: screenTitle[screenName], style: { color: '#fff', fontWeight: 'bold', } }}
						rightComponent={{ text: 'Log out', style: { color: '#fff', marginRight: 5, },  onPress: this.back }}
						barStyle="light-content"
					/>
					<ActiveScreen go={this.go} />
					<View style={styles.tabContainer}>
						<ButtonGroup
							onPress={(i) => { this.go(tab_names[i]), this.setState({ tab_name: tab_names[i] }) }}
							selectedIndex={tab_name_index(tab_name)}
							buttons={tab_names}
							textStyle={{fontSize:15}}
							innerBorderStyle={{ color: '#212121' }}
							selectedButtonStyle={{ backgroundColor: '#004D40' }}
							containerStyle={{ height: 42, borderRadius: 5, borderColor: '#212121', backgroundColor: '#CFD8DC' }}
						/>
					</View>

				</View>
			</SideMenu>
		)
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#212121',
	},
	header: {
		borderBottomWidth: 0,
		marginTop: Platform.OS === 'ios' ? 0 : - 30,
		backgroundColor: '#004D40',
	},
	tabContainer: {
		backgroundColor: '#212121',
		height: 70
	},
	buttons: {
		backgroundColor: '#212121',
		height: 100,
	}
});

var only_key = x => Object.keys(x)[0]

var tab_of = tab_name => Object.values(tabs.filter(x => only_key(x) === tab_name)[0])[0]
var tab_names = tabs.map(only_key)
var tab_name_index = tab_name => tab_names.indexOf(tab_name)
