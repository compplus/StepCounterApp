import React, {
    Component
} from 'react';

import {
    Dimensions,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Ionicons';

const tintColor = "#44C591";
const backgroundColor = "#717BA5";
const rotation = 360;

const dayDim = {
    size: 300,
    width: 10,
    iconSize: 125
};

export default class Activity extends Component{

	constructor(props) {
		super(props);

		this.state={
			steps: 2400,
			fill: 2400/10000*100
		};

	}

	renderStepCounts() {
		return <AnimatedCircularProgress
			size={dayDim.size}
			width={dayDim.width}
			fill={this.state.fill}
			tintColor={tintColor}
			backgroundColor={backgroundColor}
			rotation={rotation}
			>
			{
				(fill) => (
					<View style={styles.dayFill}>
						<Icon name='ios-walk' size={dayDim.iconSize} color='#7ADAE9'/>

						<Text style={styles.steps}>
						{this.state.steps} Steps
						</Text>

            <Text style={styles.goal}>
              Goal: 10000
            </Text>
					</View>
				)
			}
		</AnimatedCircularProgress>

	}

	render() {
		return <View style={{...styles.container,width:this.props.width}}>
			{this.renderStepCounts()}
		</View>
	}
}





const {width,height} = Dimensions.get('window')

const styles = {
	container:{
		flex:1,
		backgroundColor:'#171D33',
		alignItems:'center',
		justifyContent:'center'
	},

    dayFill: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 10,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250
    },
    day: {
        color: '#29b8e5',
        fontWeight: '800'
    },
    steps: {
        backgroundColor: 'transparent',
        fontSize: 40,
        textAlign: 'center',
        color: '#7ADAE9',
        fontFamily: 'Gill Sans',
        justifyContent: 'center'
    },
    goal: {
        position: 'relative',
        top: 5,
        color: '#7ADAE9',
        fontFamily: 'Gill Sans',
        fontSize: 20
    }
}
