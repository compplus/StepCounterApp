import React, { Component } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

export default class CommonStats extends Component {
	state = { data: null }
	componentWillMount() {
		this.getData()
	}
	getData() {
		let data = { step: 6342, kcal: 93620 }
		this.setState({ data })
	}
	textBox(title, content) {
		return (
			<View style={styles.TextBox}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.content}>
					{content}
				</Text>
			</View>
		)
	}
	render() {
		return (
			<View style={{ ...styles.container, flexDirection: this.props.portrait ? 'row' : 'column', width: this.props.portrait ? '100%' : undefined, height: this.props.portrait ? undefined : '95%' }}>
				{this.textBox('Accum Kcal', this.state.data.kcal)}
				{this.textBox('Daily Avg. Steps', this.state.data.step)}
			</View>
		)
	}
}

const styles = {
	container: {
		backgroundColor: 'white',
		//elevation: 2, //android shadow
		//shadowColor: '#000',
		/*shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,*/
		//shadowRadius: 2,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	TextBox: {
		flex: 1,
		justifyContent: 'center',
		margin: '7%',
		marginLeft: '2%',
		marginRight: '2%'
	},
	title: {
		fontSize: 13,
		textAlign: 'center'
	},
	content: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold'
	}
}
