import React, {Component} from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native'
import { PermissionsAndroid } from 'react-native';
import MapView,{Polyline} from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';

export default class Map extends Component{
	state={region:null,lineCoords:[],watchId:null}
	async requestLocationPermission(){
		try {
		const granted = await PermissionsAndroid.request(
		  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		  {
			'title': 'Location permission',
			'message': 'Let us gain access to your location '
		  }
		)
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			this.getCurrentLocation()
		} else {
		  alert("Location permission denied");
		}
		} catch (err) {
		console.warn(err)
		}
	}
	async componentWillMount() {
		await this.requestLocationPermission()
    }
	componentDidMount(){
		this.watchLoc()
	}
	componentWillUnmount(){
		Geolocation.clearWatch(this.state.watchId)
	}
	getCurrentLocation(){
		let success=({coords})=>{
			this.state.lineCoords=[{latitude:coords.latitude,longitude:coords.longitude}]
			this.setState({region:{latitude:coords.latitude,longitude:coords.longitude,latitudeDelta: 0.03,longitudeDelta: 0.03}})}
			let err=({message})=>{alert('GPS error')}
			Geolocation.getCurrentPosition(success,err,{enableHighAccuracy:true,timeout:10000})
	}
	watchLoc(){
		let success=({coords})=>{
			this.state.lineCoords=[...this.state.lineCoords,{latitude:coords.latitude,longitude:coords.longitude}]
			this.setState({})
		}
		let err=({message})=>{alert('GPS error')}
		let watchId=Geolocation.watchPosition(success,err,{interval:7000,fastestInterval:3000,distanceFilter:10})
		this.setState({watchId})
	}
	render(){
		return(
			<View style={{...styles.container,width:this.props.width}}>
			<MapView
				showsUserLocation={true}
				initialRegion={this.state.region}
				style={styles.map}
			>
				<Polyline
					coordinates={this.state.lineCoords}
					strokeColor="#000" 
					strokeWidth={6}
				/>
			</MapView>
			</View>
		)
	}
}

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	map:{
		height:'100%',
		width:'100%'
	}
})
