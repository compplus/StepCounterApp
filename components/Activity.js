import React, {
    Component
} from 'react';

import {
    Dimensions,
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pedometer } from "expo"

const tintColor = "#44C591";
const backgroundColor = "#717BA5";
const rotation = 360;

const dayDim = {
    size: 100,
    width: 10,
    iconSize: 90
};

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {steps: 0,};
    }

    componentDidMount() {
        Pedometer.watchStepCount(result => {
            this.setState({ steps: result.steps });
        })
    }

    renderStepCounts() {
        return <View style={styles.container}>
            {/*<Icon name='ios-walk' size={dayDim.iconSize} color='#7ADAE9' />*/}
            <Image
				source={require('./../assets/main_page/logo.png')}
				style={styles.headerimage}>
			</Image>
            
            <Text style={styles.steps}>
                You've walked 
                <Text style={styles.highlight}> {this.state.steps} steps </Text>
                today.
            </Text>

        </View>

        {/*<AnimatedCircularProgress
            size={dayDim.size}
            width={dayDim.width}
            fill={this.state.steps / 100}
            tintColor={tintColor}
            backgroundColor={backgroundColor}
            rotation={rotation}
        >
            {
                (fill) => (
                    <View style={styles.dayFill}>
                        <Icon name='ios-walk' size={dayDim.iconSize} color='#7ADAE9' />
                        <Text style={styles.steps}>{this.state.steps} Steps</Text>
                        <Text style={styles.goal}>Goal: 1000</Text>
                    </View>
                )
            }
        </AnimatedCircularProgress>*/}

    }

    render() {
        return <View style={{ ...styles.container }}>
            {this.renderStepCounts()}
        </View>
    }
}


const { width, height } = Dimensions.get('window')

const styles = {
    container: {
        backgroundColor: '#212121',
        //backgroundColor: '#171D33', // dark
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        height: 300,
        width: 300,
        flex: 1,
    },

    headerimage: {
        height: 100 / 1.2,
        width: 250 / 1.2,
        flex: 1,
        marginBottom: 15,
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
    quote: {
        backgroundColor: 'transparent',
        fontSize: 18,
        textAlign: 'center',
        color: '#7ADAE9', // dark
        //color: '#171D33',
        fontFamily: 'Gill Sans',
        justifyContent: 'center',
        marginBottom: 7,
    },
    steps: {
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        color: '#7ADAE9', // dark
        //color: '#171D33',
        fontFamily: 'Gill Sans',
        justifyContent: 'center'
    },
    highlight: {
        backgroundColor: 'transparent',
        fontSize: 24,
        textAlign: 'center',
        color: 'white', // dark
        //color: 'green',
        fontFamily: 'Gill Sans',
        justifyContent: 'center'
    },
}
