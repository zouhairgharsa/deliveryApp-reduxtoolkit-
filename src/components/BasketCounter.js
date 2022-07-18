import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../features/basket/basketSlice';
const BasketCounter = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const dishesReduce = useSelector((state) => state.basket.items);
  const filterdish = (id) => dishesReduce.filter((item) => item.id == id);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
      <AntDesign
        onPress={() => dispatch(removeFromBasket({ id }))}
        name="minuscircle"
        size={30}
        color={filterdish(id).length > 0 ? '#00ccbc' : 'grey'}
      />

      <Text style={{ marginHorizontal: 6, fontSize: 18 }}>
        {filterdish(id).length}
      </Text>
      <AntDesign
        onPress={() => dispatch(addToBasket({ id, name, price }))}
        name="pluscircle"
        size={30}
        color="#00ccbc"
      />
    </View>
  );
};

export default BasketCounter;
