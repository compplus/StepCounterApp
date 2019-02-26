import React, {Component} from 'react'
import {StyleSheet, Text, View, SafeAreaView, BackHandler,Platform} from 'react-native'
import * as screens from './screens'

export default class App extends Component{
	state = {screen: 'Login',EntryScreen:''}


	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
	}


	handleBackPress=()=>{
		return this.back()
	}
	back=()=> {
		let screen=this.state.screen
		if(screen=='Entry'){
			if(this.state.EntryScreen=='In')this.setState({screen: 'Login'})
			else this.setState({EntryScreen: 'In'})
			return true
		}
		else if(screen=='Signup'){
			this.setState({screen: 'Login'})
			return true
		}
		return false
	}

		 
	render() {
		var screen_name = this.state.screen
		var ActiveScreen = screens [screen_name]
		return(
		<SafeAreaView style={styles.container}>	
			<ActiveScreen
				EntryScreen={this.state.EntryScreen}//for Entry
				go={screen => {
					if(screen_name!='Entry'){
						this.setState({screen})
						if(screen=='Entry')this.setState({EntryScreen:'In'})
					}
					else this.setState({EntryScreen:screen})
					} 
				}
				back={this.back}
			/>
		</SafeAreaView>)}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
