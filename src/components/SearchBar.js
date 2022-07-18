import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const SeachBar = () => {
  return (
    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'lightgrey',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          borderRadius: 5,
          flex: 1,
        }}>
        <Feather name="search" size={24} color="#00ccbc" />
        <TextInput
          placeholder="Restaurants,dishes"
          style={{ paddingVertical: 10, paddingLeft: 8, fontSize: 17 }}
        />
      </View>
      <FontAwesome
        name="sliders"
        size={30}
        color="#00ccbc"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};


export default SeachBar