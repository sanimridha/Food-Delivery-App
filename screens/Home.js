import React, {useState} from 'react';
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

  //price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const resturantData = [
    {
      id: 1,
      name: 'Toasty Buns Burgers',
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.burger_restaurant_1,
      duration: '30 - 45 min',
      location: {
        latitude: 23.773092,
        longitude: 90.409808,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Amy',
      },
      menu: [
        {
          menuId: 1,
          name: 'Crispy Chicken Burger',
          photo: images.crispy_chicken_burger,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: images.honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: 'Crispy Baked French Fries',
          photo: images.baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: 'BINGO Burgers and Pizza',
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.pizza_restaurant,
      duration: '15 - 20 min',
      location: {
        latitude: 23.789979,
        longitude: 90.408351,
      },
      courier: {
        avatar: images.avatar_2,
        name: 'Jackson',
      },
      menu: [
        {
          menuId: 4,
          name: 'Hawaiian Pizza',
          photo: images.hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: 'Tomato & Basil Pizza',
          photo: images.pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: 'Tomato Pasta',
          photo: images.tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: 'Mediterranean Chopped Salad ',
          photo: images.salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: 'yummy Hotdogs',
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.hot_dog_restaurant,
      duration: '20 - 25 min',
      location: {
        latitude: 23.802701,
        longitude: 90.421837,
      },
      courier: {
        avatar: images.avatar_3,
        name: 'James',
      },
      menu: [
        {
          menuId: 8,
          name: 'Chicago Style Hot Dog',
          photo: images.chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: 'The Crispy Bun',
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.japanese_restaurant,
      duration: '10 - 15 min',
      location: {
        latitude: 23.787073,
        longitude: 90.42553,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Ahmad',
      },
      menu: [
        {
          menuId: 9,
          name: 'Sushi sets',
          photo: images.sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: 'Burger Master Mike',
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.noodle_shop,
      duration: '15 - 20 min',
      location: {
        latitude: 23.79045,
        longitude: 90.391948,
      },
      courier: {
        avatar: images.avatar_4,
        name: 'Muthu',
      },
      menu: [
        {
          menuId: 10,
          name: 'Kolo Mee',
          photo: images.kolo_mee,
          description: 'Noodles with char siu',
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: 'Sarawak Laksa',
          photo: images.sarawak_laksa,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: 'Nasi Lemak',
          photo: images.nasi_lemak,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: 'Nasi Briyani with Mutton',
          photo: images.nasi_briyani_mutton,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: 'The Burger Barn & Dessets',
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.kek_lapis_shop,
      duration: '35 - 40 min',
      location: {
        latitude: 23.777019,
        longitude: 90.37658,
      },
      courier: {
        avatar: images.avatar_1,
        name: 'Jessie',
      },
      menu: [
        {
          menuId: 12,
          name: 'Teh C Peng',
          photo: images.teh_c_peng,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: 'ABC Ice Kacang',
          photo: images.ice_kacang,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: 'Kek Lapis',
          photo: images.kek_lapis,
          description: 'Layer cakes',
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [resturants, setResturants] = useState(resturantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

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
          <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
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
  const renderMainCategories = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            marginRight: 5,
            paddingBottom: SIZES.padding * 2,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: SIZES.padding,
            ...styles.shadow,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </View>
          <Text
            style={{
              marginTop: SIZES.padding,
              color: COLORS.white,
              ...FONTS.body5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: SIZES.padding * 2}}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
    </SafeAreaView>
  );
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
