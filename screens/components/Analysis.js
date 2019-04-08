import React,{Component} from 'react'
import {View,StyleSheet,ActivityIndicator} from 'react-native'
import PureChart from "./react-native-pure-chart/examples/pure-chart"
import {ButtonGroup} from 'react-native-elements'

const TimeUnits=['hours','days','months']
const data=['calories','steps']
export default class Analysis extends Component{
    state={SelectedTimeUnit:'hours',SelectedData:'steps',AllData:{},loading:true,ChartHeight:200}
    componentDidMount(){
        this.getAllData()
    }
    getAllData=()=>{
        let AllData={
            steps:{
                hours:[
                    {x:'00:00',y:10},
                    {x:'01:00',y:12},
                    {x:'02:00',y:0},
                    {x:'03:00',y:0},
                    {x:'04:00',y:13},
                    {x:'05:00',y:0},
                    {x:'06:00',y:20},
                    {x:'07:00',y:140},//...steps per hour in the current day
                 ],
                 days:[
                    {x:'1',y:5000},
                    {x:'2',y:1200},
                    {x:'3',y:4240},
                    {x:'4',y:2330},
                    {x:'5',y:1300},
                    {x:'6',y:0},
                    {x:'7',y:2000},
                    {x:'8',y:1400}//...steps per day in the current month
                 ],
                 months:[
                    {x:'Jan',y:52000},
                    {x:'Feb',y:12400},
                    {x:'Mar',y:42540},
                    {x:'Apr',y:12330},
                    {x:'May',y:41300},
                    {x:'Jun',y:30020},
                    {x:'Jul',y:23000},
                    {x:'Aug',y:14500}//...steps per Month in the current year
                 ]
            },
            calories:{

            }
        }
        let timeUnitsWithData=Object.keys(AllData.steps)
        for(let i=0;i<timeUnitsWithData.length;i++){
            let k=timeUnitsWithData[i]
            AllData.calories[k]=AllData.steps[k].map(d=>{
                return {x:d.x,y:this.caloriesCalculator(d.y)}
            })
        }
        
        this.setState({AllData,loading:false})
    }
    caloriesCalculator=(steps,weight=65/*kg*/)=>{
        const stepsPerMile=2105
        weight=weight*2.205//kg to pounds
        const calPerMile=0.57*weight
        return parseFloat((calPerMile*(steps/stepsPerMile)).toPrecision(3))
    }
    render(){
        const {SelectedTimeUnit,SelectedData,AllData,loading,ChartHeight} = this.state
		const {width} = this.props
        return(
            <View style={{width:width,flex:1,justifyContent:'center'}}>
                <ButtonGroup
                    onPress={(i)=>{this.setState({SelectedTimeUnit: TimeUnits[i]})}}
                    selectedIndex={TimeUnits.indexOf(SelectedTimeUnit)}
                    buttons={TimeUnits}
                />
                {loading?
                <ActivityIndicator/>:
				<View
                style={{flex:1,justifyContent:'center'}}
				onLayout={(event)=>{
					this.setState({ChartHeight:event.nativeEvent.layout.height})}}>
                <PureChart
                height={ChartHeight*0.7}
                xAxisGridLineColor='transparent'
                data={AllData[SelectedData][SelectedTimeUnit]}
                type='line' 
                /></View>}
                <ButtonGroup
                    onPress={(i)=>{this.setState({SelectedData: data[i]})}}
                    selectedIndex={data.indexOf(SelectedData)}
                    buttons={data}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    },

})