/*import React, {Component} from 'react';
import {View,Animated,Easing} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';

export default class SideMenu extends Component{
	state={alpha:new Animated.Value(0),isShowing:false}
	componentDidMount(){
		this.componentDidUpdate()
	}
	componentDidUpdate(){
		const {isShowing} = this.state
		const {isOpen} = this.props
		if(isOpen!=undefined && isOpen!=isShowing){
			if(isOpen)this.showDrawer()
			else this.closeDrawer()
		}
	}
	showDrawer=()=>{
		const {onChange} = this.props
		if(onChange!=undefined)onChange(true)
		this.setState({isShowing:true})
		Animated.timing(
		  this.state.alpha,
		  {
			duration:250,
			easing:Easing.linear(),
			toValue: 1,
		  },
		).start(()=>{});
	}
	
	closeDrawer=()=>{
		const {onChange} = this.props
		Animated.timing(
		  this.state.alpha,
		  {
			duration:250,
			toValue: 0,
		  },
		).start(()=>{if(onChange!=undefined)onChange(false);this.setState({isShowing:false});});
	}
 
	render() {
		const {alpha,isShowing}=this.state
		return (
		{/*<GestureRecognizer
			onSwipeLeft={this.closeDrawer}
			onSwipeRight={this.closeDrawer}
			config={{
			velocityThreshold: 0.3,
			directionalOffsetThreshold: 80
			}}
			style={{
			flex:1,
			backgroundColor:isShowing?"transparent":"transparent"//no respond without this line
			}}
		>
		{this.props.children}
		{isShowing?
		<View style={{position:'absolute',top:0,left:0,height:"100%",width:"100%"}}>
		<Animated.View style={{flex:1,backgroundColor:alpha.interpolate({
		inputRange: [0, 1],
		outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]
		}),}}>
			<Animated.View style={{flex:1,width:"70%",backgroundColor:"white",marginLeft:alpha.interpolate({
			inputRange: [0, 1],
			outputRange: ["-80%", "0%"]
			})}}>
			{this.props.menu}
			</Animated.View>
		</Animated.View>
		</View>:null}
		</GestureRecognizer>*/}
		);
	}
}
*/