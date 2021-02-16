import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {COLORS, FONTS, SIZES, GOOGLE_API_KEY, icons} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  const [resturant, setResturant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    let {resturant, currentLocation} = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = resturant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };
    setResturant(resturant);
    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  const renderMap = () => {
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <Image
              source={icons.pin}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );
    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        //rotation
      >
        <Image
          source={icons.car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}>
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderMap()}
    </View>
  );
};

export default OrderDelivery;
