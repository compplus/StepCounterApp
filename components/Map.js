import React, { Component } from 'react';
import { MapView, Location, Permissions } from 'expo';

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class Map extends Component {
  state = {};

  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
  };

  locationChanged = (location) => {
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.005,
    }
    this.setState({ location, region })
  }

  render() {
    return (
      <MapView
        style={{ flex: 1, width: this.props.width }}
        showsUserLocation={true}
        followUserLocation={true}
        region={this.state.region}
      />
    );
  }
}
