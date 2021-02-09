import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {COLORS, icons, images, SIZES, FONTS} from '../constants';

const Home = () => {
  //Dummy Datas For Current Location
  const initialCurrentLocation = {
    streetName: 'Gulshan 1',
    gps: {
      latitude: 23.780416,
      longitude: 90.416722,
    },
  };
  const categoryData = [
    {
      id: 1,
      name: 'Rice',
      icon: icons.rice_bowl,
    },
    {
      id: 2,
      name: 'Noodles',
      icon: icons.noodle,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      icon: icons.hotdog,
    },
    {
      id: 4,
      name: 'Salads',
      icon: icons.salad,
    },
    {
      id: 5,
      name: 'Burgers',
      icon: icons.hamburger,
    },
    {
      id: 6,
      name: 'Pizza',
      icon: icons.pizza,
    },
    {
      id: 7,
      name: 'Snacks',
      icon: icons.fries,
    },
    {
      id: 8,
      name: 'Sushi',
      icon: icons.sushi,
    },
    {
      id: 9,
      name: 'Desserts',
      icon: icons.donut,
    },
    {
      id: 10,
      name: 'Drinks',
      icon: icons.drink,
    },
  ];

  return <SafeAreaView style={styles.container}>{renderHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

const renderHeader = () => (
  <View style={{flexDirection: 'row', height: 50}}>
    <TouchableOpacity
      style={{
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.nearby}
        resizeMode="center"
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: '70%',
          height: '100%',
          backgroundColor: COLORS.lightGray3,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Text style={{...FONTS.h3}}>Location</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.basket}
        resizeMode="contain"
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  </View>
);

export default Home;
