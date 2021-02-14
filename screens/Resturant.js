import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {icons, COLORS, SIZES, FONTS} from '../constants';

const Resturant = ({route, navigation}) => {
  const [resturant, setResturant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let {item, currentLocation} = route.params;

    setResturant(item);
    setCurrentLocation(currentLocation);
  }, []);

  const renderHeader = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        {/* Resturant Name Section */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}>
            <Text style={{...FONTS.h3}}>{resturant?.name}</Text>
          </View>
        </View>
        {/* List Button Section */}
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}>
          <Image
            source={icons.list}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderFoodInfo = () => {
    return <Animated.ScrollView></Animated.ScrollView>;
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderFoodInfo()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Resturant;
