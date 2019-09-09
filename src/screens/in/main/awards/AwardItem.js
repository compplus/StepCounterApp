import { View, Text, Image, TouchableOpacity } from 'react-native'
import Dialog from 'react-native-popup-dialog'
import { DialogContent, DialogTitle } from 'react-native-popup-dialog'

import { I, L, suppose } from 'camarche/core'
import { pinpoint, match, case_ } from 'camarche/optics'
import { belief, please, L_, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { live_, scale } from '~/project/live'

import { _state } from '~/project/state'

var styles = {
	container: {
		flex: 1,
		alignItems: 'center' },
	dialogueStyle:{
		flexDirection: 'Column',
		alignItems: 'center',
		justifyContent: 'center' },
	image: {
		width: scale (100),
		height: scale (100) },
	dialog_img: {
		width: scale (200),
		height: scale (200),
		justifyContent: 'center' }, 
	text: {
		fontSize: scale (13),
		textAlign: 'center',
		color: 'white',
		fontWeight: '600' }, 
	title: {
		fontSize: scale (18),
		textAlign: 'center',
		fontWeight: '600' }, 
	description: {
		fontSize: scale (15),
		textAlign: 'center' } }

export default calmm (({ title, description, status, image }) =>
	suppose (
	( award_on_state = belief ([ 'award-item-zoom', title, L .valueOr (false) ]) (_state)
	, show_award = _ => {if (status) {;please (L_ .set (true)) (award_on_state)}}
	) =>
	<View style={styles .container}>
		<TouchableOpacity onPress={show_award}>
			<Image style={live_ (styles .image)} source={!! status
				? image
				: require('__/assets/awards_page/question_mark.png')} />
			<Dialog
				visible={mark (award_on_state)}
				width={300}
				dialogStyle={{ borderRadius: 10 }}
				onTouchOutside={_ => {;please (L_ .set (false)) (award_on_state)}}
				>
				<DialogTitle title={title} textStyle={live_ (styles .title)} />
				<DialogContent style={styles .dialogueStyle}>
					<Image style={live_ (styles .dialog_img)} source={image} />
					<Text style={live_ (styles .description)}>{description}</Text>
					</DialogContent>
				</Dialog>
			</TouchableOpacity>
		{ pinpoint (
		match (
		case_ (L .when (I)) (
		<Text style={live_ (styles .text)}>{ title }</Text> ) )
		) (status ) }
		</View> ) )
