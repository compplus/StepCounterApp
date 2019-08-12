import React,{Component} from 'react'
import {View,ScrollView,StyleSheet,Dimensions} from 'react-native'
import Analysis from './Analysis'
import Activity from './Activity'
import Dots from './Dots'
import GoBack from './GoBack'
import Map from './Map'

export default class DynamicStats extends Component{
	state={currentPage:0,width:width*0.95}
	
	setCurrentPage(currentPage){
		this.setState({currentPage})
	}
	
	render() {
		const {currentPage,width}=this.state
		return <View style={{...styles.container,width:this.props.portrait?'100%':undefined,height:this.props.portrait?undefined:'95%'}} onLayout={(event)=>{this.setState({width:event.nativeEvent.layout.width})}}>
			<ScrollView style={{flex:1}} 
				horizontal 
				showsHorizontalScrollIndicator={false} 
				pagingEnabled
				onScroll={(event)=>{ let page=Math.round(event.nativeEvent.contentOffset.x/(width));if(page!=currentPage)this.setCurrentPage(page)}}
				onContentSizeChange={()=>{this.scrollview.scrollTo({x:currentPage*width,y:0,animated:true})}}
				ref={(scrollview)=>{this.scrollview=scrollview}}
				scrollEnabled={currentPage!=1}
			>
				<Activity width={width} portrait={this.props.portrait}/>
				<Analysis width={width} portrait={this.props.portrait} parentshouldScroll={sE=>this.setState({scrollEnabled:sE})}/>
				<Map width={width}/>
			</ScrollView>
			<GoBack visible={currentPage==2||currentPage==1} direction={'left'} goto={(direction)=>{this.scrollview.scrollTo({x:(currentPage+direction)*width,y:0,animated:true})}}/>
			<GoBack visible={currentPage==1} direction={'right'} goto={(direction)=>{this.scrollview.scrollTo({x:(currentPage+direction)*width,y:0,animated:true})}}/>
			<Dots numofpage={3} currentPage={currentPage}/>
		</View>
	}
}

const {width, height} = Dimensions.get('window')

const styles = {
	container:{
		backgroundColor:'white',
		flex:1,
		elevation: 2, //android shadow
		/*shadowColor: '#000',*/
		/*shadowOffset: { width: 0, height: 2 },*/
		/*shadowOpacity: 0.8,*/
		shadowRadius: 2,
	}
}
