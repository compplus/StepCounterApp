import { TouchableWithoutFeedback, Keyboard } from 'react-native'

export default ({ children }) =>
	<TouchableWithoutFeedback onPress={_ => {;Keyboard .dismiss ()}}>{ children }</TouchableWithoutFeedback>
