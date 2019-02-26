import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Dimensions,Platform} from 'react-native';
import {Header} from 'react-native-elements'
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
import Info from './Info';
import Setting from './Setting'
import In from './In'

const screens={Info,Setting,In} //after login
const screenTitle={Info:'Info',In:'Home',Setting:'Setting'}

export default class Entry extends Component{
	state={isOpen: false}

	onMenuItemSelected = item => {
		this.setState({isOpen: false})
		this.props.go(item)
	}
	updateMenuState=(isOpen)=>{
		this.setState({isOpen})
	}

	render() {
		var {EntryScreen,go,back} = this.props
		var ActiveScreen = screens[EntryScreen]
		let shouldLogout=EntryScreen=='In'
		const menu =  <Menu onItemSelected={this.onMenuItemSelected}/>;
		return (
		<SideMenu 
		menu={menu}
		isOpen={this.state.isOpen}
		onChange={isOpen => this.updateMenuState(isOpen)}
		>
			<View style={styles.container}>
				 <Header
					containerStyle={styles.header}
					backgroundColor='black'
					leftComponent={{ icon: 'menu', color: '#fff' ,onPress:()=>this.updateMenuState(!this.state.isOpen)}}
					centerComponent={{ text: screenTitle[EntryScreen], style: { color: '#fff',fontWeight:'bold' } }}
					rightComponent={{ icon: shouldLogout?'logout':'home',type:shouldLogout?'antdesign':'material', color: '#fff' ,onPress:back}}
					/>
				<ActiveScreen go={go}/>
			</View>
		</SideMenu>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header:{
		borderBottomWidth:0,
		marginTop:Platform.OS === 'ios' ? 0 : - 30,
		elevation:2
	}
});
