import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const BasketButton = () => {
  const dispatch = useDispatch();
  const dishesReduce = useSelector((state, action) => state.basket.items);
  const filterdish = (id) => dishesReduce.filter((item) => item.id == id);

  const totalPrice = dishesReduce.reduce(
    (acc, current) => acc + current.price,
    0
  );

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: 50,
        backgroundColor: '#00ccbc',
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 30,
        borderRadius: 15,
      }}
      onPress={() => navigation.navigate('Basket')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#026159',
            paddingVertical: 5,
            paddingHorizontal: 8,
          }}>
          <Text style={{ fontSize: 18, fontWeight: '900', color: 'white' }}>
            {dishesReduce.length}
          </Text>
        </View>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
          View Basket
        </Text>
        <Text style={{ color: 'white', fontSize: 18 }}>
          {totalPrice.toFixed(2)} $
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketButton;
