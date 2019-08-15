import React, { Component } from 'react'
import { Alert, View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { scale, moderateScale, verticalScale } from './Scaling';
import Dialog, { DialogContent, DialogTitle } from 'react-native-popup-dialog';

const { width, height } = Dimensions.get('window');

export default class AwardItem extends Component {
	state = {
		height: undefined,
		visible: false
	};

	render() {
		return (
			<View style={{ ...styles.container, height: this.state.height }} onLayout={(e) => { this.setState({ height: e.nativeEvent.layout.height }) }}>

				<TouchableOpacity onPress={() => { this.props.status ? this.setState({ visible: true }) : null }}
				>

					<Image style={styles.image} source={this.props.status
						? this.props.imageuri
						: require('../assets/awards_page/question_mark.png')} />

					<Dialog
						visible={this.state.visible}
						width='80%'
						dialogStyle={{ borderRadius: 10, }}
						onTouchOutside={() => {
							this.setState({ visible: false });
						}}
					>
						<DialogTitle title={this.props.title} textStyle={styles.title}/>
						<DialogContent style={styles.dialogueStyle}>
							<Image style={styles.dialog_img} source={this.props.imageuri}></Image>
							<Text style={styles.description}>{this.props.description}</Text>
						</DialogContent>
					</Dialog>

				</TouchableOpacity>

				<Text style={styles.text}>
					{this.props.status
						? this.props.title
						: null}
				</Text>

			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		alignItems: 'center'
	},

	dialogueStyle:{
		flexDirection: 'column',
		alignItems:'center',
		justifyContent:'center'
	},

	image: {
		width: scale(100),
		height: scale(100),
	},

	dialog_img: {
		width: scale(200),
		height: scale(200),
		justifyContent: 'center',
	},

	text: {
		fontSize: scale(13),
		textAlign: 'center',
		color: 'white',
		fontWeight: "600",
	},

	title: {
		fontSize: scale(18),
		textAlign: 'center',
		fontWeight: "600",
	},

	description: {
		fontSize: scale(15),
		textAlign: 'center',
	}

}
