import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {COLORS, FONTS, SIZES, GOOGLE_API_KEY} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  const [resturant, setResturant] = useState(null);
  const [streetName, setStreetName] = useState('');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [region, setRegion] = useState(null);

  const renderMap = () => {
    return (
      <View style={{flex: 1}}>
        <MapView style={{flex: 1}}></MapView>
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
