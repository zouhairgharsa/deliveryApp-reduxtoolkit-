import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const logo = 'https://clever-knuth-2dabed.netlify.app/assets/delivery.png';
 const HeaderUser = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={{ uri: logo }}
      style={{
        width: 45,
        height: 45,
        borderRadius: 23,
        resizeMode: 'contain',
      }}
    />
    <View style={{ marginLeft: 8, flex: 1 }}>
      <Text style={{ color: '#585c5c', fontSize: 17 }}>Delivery-Now</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{
            color: '#2E3333',
            fontWeight: 'bold',
            fontSize: 20,
            lineHeight: 32,
            marginRight: 8,
          }}>
          Selected Location
        </Text>
        <AntDesign name="down" size={22} color="#00ccbc" />
      </View>
    </View>
    <View style={{ backgroundColor: '#dfe2e8', padding: 15, borderRadius: 25 }}>
      <AntDesign name="user" size={20} color="#00ccbc" />
    </View>
  </View>
);


export default HeaderUser