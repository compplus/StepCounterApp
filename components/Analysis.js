import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import PureChart from "./react-native-pure-chart/examples/pure-chart"
import { ButtonGroup } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon_ion from 'react-native-vector-icons/Ionicons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

const TimeUnits = ['hours', 'days', 'months']
const data = ['steps', 'calories']

export default class Analysis extends Component {
    state = { SelectedTimeUnit: 'hours', SelectedData: 'steps', AllData: {}, loading: true, ChartHeight: 200 }
    componentDidMount() {
        this.getAllData()
    }
    getAllData = () => {
        let AllData = {
            steps: {
                hours: [
                    { x: '00:00', y: 10 },
                    { x: '01:00', y: 12 },
                    { x: '02:00', y: 0 },
                    { x: '03:00', y: 0 },
                    { x: '04:00', y: 13 },
                    { x: '05:00', y: 0 },
                    { x: '06:00', y: 20 },
                    { x: '07:00', y: 140 },//...steps per hour in the current day
                ],
                days: [
                    { x: '1', y: 5000 },
                    { x: '2', y: 1200 },
                    { x: '3', y: 4240 },
                    { x: '4', y: 2330 },
                    { x: '5', y: 1300 },
                    { x: '6', y: 0 },
                    { x: '7', y: 2000 },
                    { x: '8', y: 1400 }//...steps per day in the current month
                ],
                months: [
                    { x: 'Jan', y: 52000 },
                    { x: 'Feb', y: 12400 },
                    { x: 'Mar', y: 42540 },
                    { x: 'Apr', y: 12330 },
                    { x: 'May', y: 41300 },
                    { x: 'Jun', y: 30020 },
                    { x: 'Jul', y: 23000 },
                    { x: 'Aug', y: 14500 }//...steps per Month in the current year
                ]
            },
            color: '#FFFFFF',
            calories: {

            },
            color: '#FFFFFF',
        }
        let timeUnitsWithData = Object.keys(AllData.steps)
        for (let i = 0; i < timeUnitsWithData.length; i++) {
            let k = timeUnitsWithData[i]
            AllData.calories[k] = AllData.steps[k].map(d => {
                return { x: d.x, y: this.caloriesCalculator(d.y) }
            })
        }

        this.setState({ AllData, loading: false })
    }
    caloriesCalculator = (steps, weight = 65/*kg*/) => {
        const stepsPerMile = 2105
        weight = weight * 2.205//kg to pounds
        const calPerMile = 0.57 * weight
        return parseFloat((calPerMile * (steps / stepsPerMile)).toPrecision(3))
    }
    render() {
        const { SelectedTimeUnit, SelectedData, AllData, loading, ChartHeight } = this.state
        const { width } = this.props
        return (
            <View style={{ width: width, flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#212121' }}>
                {/*<Button
                    icon={<Icon
                        name="fire"
                        size={20}
                        color="white"
                        />}
                title=" Calories"
                buttonStyle={{ margin: 7, height: 50, backgroundColor: '#FF5B54' }}
                titleStyle={{ color: 'white', fontFamily: "Gill Sans", }}
                type="solid"
                onPress={(i) => { this.setState({ SelectedData: 'calories' }) }}
                    />*/}

                <View style={{ height: 15 }}></View>

                <ButtonGroup
                    onPress={(i) => { this.setState({ SelectedTimeUnit: TimeUnits[i] }) }}
                    selectedIndex={TimeUnits.indexOf(SelectedTimeUnit)}
                    buttons={['Hours', 'Days', 'Months']}
                    textStyle={{ color: '#FFFFFF' }}
                    innerBorderStyle={{ color: '#212121' }}
                    selectedButtonStyle={{ backgroundColor: '#26A69A' }}
                    containerStyle={{ borderRadius: '5', borderColor: '#212121', backgroundColor: '#424242' }}
                />
                {/*<ButtonGroup
                    onPress={(i) => { this.setState({ SelectedData: data[i] }) }}
                    selectedIndex={data.indexOf(SelectedData)}
                    buttons={['Steps', 'Calories']}
                    textStyle={{ color: '#FFFFFF' }}
                    innerBorderStyle={{ color: '#171D33' }}
                    selectedButtonStyle={{ backgroundColor: '#006064', }}
                    containerStyle={{ borderRadius: '5', borderColor: '#171D33', backgroundColor: '#424242' }}
                />*/}

                {loading ?
                    <ActivityIndicator /> :
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Number of steps you've walked</Text>
                        </View>
                        <LineChart
                            data={{
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                datasets: [{
                                    data: [
                                        1000,
                                        2000,
                                        3000,
                                        500,
                                        5000,
                                        1000
                                    ]
                                }]
                            }}
                            width={Dimensions.get('window').width - 25} // from react-native
                            height={Dimensions.get('window').height/2 - 200}
                            yAxisLabel={''}
                            chartConfig={{
                                backgroundColor: '#006064',
                                backgroundGradientFrom: '#00838F',
                                backgroundGradientTo: '#00BCD4',
                                strokeWidth: 2,
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Calories you've burnt</Text>
                        </View>
                        <LineChart
                            data={{
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                datasets: [{
                                    data: [
                                        1000,
                                        2000,
                                        2000,
                                        4000,
                                        5000,
                                        3000
                                    ]
                                }]
                            }}
                            width={Dimensions.get('window').width - 25} // from react-native
                            height={Dimensions.get('window').height/2 - 200}
                            yAxisLabel={''}
                            chartConfig={{
                                backgroundColor: '#004D40',
                                backgroundGradientFrom: '#00695C',
                                backgroundGradientTo: '#009688',
                                strokeWidth: 2,
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    </View>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Gill Sans',
        marginTop: 30,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})