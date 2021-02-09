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
    <TouchableOpacity>
      <Image
        source={icons.basket}
        resizeMode="contain"
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
  </View>
);

const Home = () => {
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

export default Home;
