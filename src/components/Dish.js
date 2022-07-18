import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

const Dish = ({ item, setShowCounter, showCounter }) => {
  const { id, name, description, imageDish } = item;
  return (
    <Pressable
      onPress={() => setShowCounter(id)}
      style={{
        height: 100,
        borderBottomWidth: showCounter === id ? 1 : 0,
        borderBottomColor: 'grey',
        paddingVertical: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 36,
              color: '#2e3333',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 17,
              lineHeight: 26,
              color: '#2e3333',
            }}
            numberOfLines={2}>
            {description}
          </Text>
        </View>

        <Image
          source={{ uri: imageDish }}
          style={{ width: 80, height: 80, marginLeft: 10 }}
        />
      </View>
    </Pressable>
  );
};

export default Dish;
