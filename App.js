import React, {Component} from 'react';
import {ButtonGroup} from 'react-native-elements'
import {StyleSheet, Text, View, SafeAreaView, BackHandler} from 'react-native';
import Screen from './screens/screens'
import Background from './screens/components/background'

export default class App extends Component{
	state={screen:0}
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
	}

	handleBackPress = () => {
		this.back(); 
		return true;
	}
	
	
	back(){
		this.setState({screen:0})
	}
	
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Screen screen={this.state.screen} setScreen={(screen)=>{this.setState({screen})}}/>
					{(this.state.screen==1 || this.state.screen==2)?
					<ButtonGroup
					  onPress={(i)=>{this.setState({screen:i+1})}}
					  selectedIndex={this.state.screen-1}
					  buttons={['Main','Awards']}
					  containerStyle={{}}
					/>:null}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tab:{
	  backgroundColor:'red',
	  width:'100%',
	  height:'5%'
  }
});
