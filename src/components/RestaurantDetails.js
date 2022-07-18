import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const RestaurantDetails = ({ item }) => {
  const { title, minutes, rating, miles, delivery } = item;
  return (
    <>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={{ color: '#2e3333', fontSize: 24, fontWeight: '600' }}>
          {title}
        </Text>
        <Text style={{ fontSize: 20 }}>
          {minutes} min · Sushi · Healthy · Asian
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Entypo name="star" size={20} color={'green'} />
          <Text style={{ fontSize: 20, color: 'green' }}>
            {rating} Excellent{' '}
          <Text style={{ color: '#585c5c' }}>{miles} miles away</Text>
          </Text>
        </View>
        <Text style={{ fontSize: 20, color: '#585c5c' }}>
          {delivery} $ · delivery · 7.00 $ minumun
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 10,
        }}>
        <Image
          source={{
            uri: 'https://clever-knuth-2dabed.netlify.app/assets/delivery.png',
          }}
          style={{ width: 55, height: 55, resizeMode: 'contain' }}
        />
        <Text style={{ marginLeft: 8, fontSize: 18 }}>
          Deliver in {minutes} min
        </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={{ color: '#00ccbc', fontSize: 18 }}>Change</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RestaurantDetails;
