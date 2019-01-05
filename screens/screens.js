import React, {Component} from 'react';
import Awards from './Awards'
import Login from './Login'
import Main from './Main'
import Signup from './Signup'

export default class Screen extends Component{
	viewCreate(Name){
		return <Name go={(screen)=>{this.props.setScreen(screen)}}/>
	}
	view=[
		this.viewCreate(Login),
		this.viewCreate(Main),
		this.viewCreate(Awards),
		this.viewCreate(Signup),
	]
	render(){
		return(
			this.view[this.props.screen]
		)
	}
}