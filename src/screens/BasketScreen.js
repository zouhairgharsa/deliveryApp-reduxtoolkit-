import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';



const Fee = ({ feeName, feePrice }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>{feeName}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
        }}>
        <Ionicons
          name="information-circle-outline"
          size={24}
          color="black"
          style={{ marginRight: 4, paddingTop: 4 }}
        />
        <Text style={{ fontSize: 20 }}>${feePrice}</Text>
      </View>
    </View>
  );
};

export default function BasketScreen({ navigation }) {
   const dispatch = useDispatch();
  const dishesReduce = useSelector((state, action) => state.basket.items);
  const filterdish = (id) => dishesReduce.filter((item) => item.id == id);

  const totalPrice = dishesReduce.reduce(
    (acc, current) => acc + current.price,
    0
  );
  const percentagePrice = (totalPrice * 15) / 100;
  const subtotal = totalPrice - percentagePrice;
  const totalFees = 3.99 + 2.99 + 0.65;
  return (
    <View style={{ flex: 1, marginHorizontal: 8, paddingTop: 2*24 }}>
      <View style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Your Order :</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
          Total Price : {(subtotal + totalFees).toFixed(2)}$
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Subtotal</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="pricetag-outline" size={24} color="#fb5058" />
              <Text style={{ color: '#585c5c', fontSize: 16 }}>
                15 % off ({percentagePrice.toFixed(2)} $ )
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20 }}>{subtotal.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
        <Fee feeName={'Delivery fee'} feePrice={3.99} />
        <Fee feeName={'Service fee'} feePrice={2.49} />
        <Fee feeName={'Single-use carrier bags'} feePrice={0.65} />
      </View>
      <Pressable
      onPress={()=>navigation.navigate('Home')}
        style={{
          height: 50,
          borderRadius: 8,
          backgroundColor: '#00ccbc',
          marginTop: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Go to checkout
        </Text>
      </Pressable>
    </View>
  );
}