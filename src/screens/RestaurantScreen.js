import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  BasketCounter,
  RestaurantDetails,
  Dish,
  BasketButton,
} from '../components';


import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import data from '../constants/data';

export default function RestaurantScreen({ navigation, route }) {
  const [showCounter, setShowCounter] = useState();
  const { id } = route.params;
  const { height } = useWindowDimensions();

  const details = data
    .flatMap((item) => item.contents)
    .find((item) => item.id == id);

  const dishesReduce = useSelector((state) => state.basket.items);
  const filterdish = (id) => dishesReduce.filter((item) => item.id == id);

  const totalPrice = dishesReduce.reduce(
    (acc, current) => acc + current.price,
    0
  );

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 15 }}>
          <View style={{ height: 0.3 * height, width: '100%' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                top: 50,
                left: 25,
                zIndex: 10,
                padding: 10,
                borderRadius: 40,
              }}>
              <AntDesign name="arrowleft" size={30} color="#00ccbc" />
            </TouchableOpacity>
            <Image
              source={{ uri: details.imageUri }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <RestaurantDetails item={details} />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{ fontSize: 26, fontWeight: 'bold', paddingHorizontal: 10 }}>
            Menu
          </Text>
          <View>
            <FlatList
              data={details.dishes}
              style={{ flexGrow: 1 }}
              contentContainerStyle={{
                paddingHorizontal: 10,
                marginTop: 10,
                backgroundColor: 'white',
              }}
              renderItem={({ item }) => {
                const { id, name, price } = item;
                return (
                  <View style={{ paddingVertical: 10 }}>
                    <Dish
                      item={item}
                      showCounter={showCounter}
                      setShowCounter={setShowCounter}
                    />
                    <View>
                      {showCounter === id && (
                        <BasketCounter id={id} name={name} price={price} />
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View>{dishesReduce.length > 0 && <BasketButton />}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
