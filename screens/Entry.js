import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Platform} from 'react-native';
import {Header} from 'react-native-elements'
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
import Info from './Info';
import Setting from './Setting'
import In from './In'

const screens={Info,Setting,In} //after login
const screenTitle={In:'Home',Info:'Info',Setting:'Setting'}

export default class Entry extends Component{
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
			this.go('Login')
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
		var screenName = this.state.screen
		var ActiveScreen = screens[screenName]
		let shouldLogout=screenName=='In'
		const menu =  <Menu screenTitle={screenTitle} onItemSelected={this.onMenuItemSelected}/>;
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
					centerComponent={{ text: screenTitle[screenName], style: { color: '#fff',fontWeight:'bold' } }}
					rightComponent={{ icon: shouldLogout?'logout':'home',type:shouldLogout?'antdesign':'material', color: '#fff' ,onPress:this.back}}
					/>
				<ActiveScreen go={this.go}/>
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
