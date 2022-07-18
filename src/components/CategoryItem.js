import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CategoryItem = ({ item }) => {
  const { background, imageUri } = item;
  return (
    <View
      style={{
        width: 100,
        aspectRatio: 1,
        borderRadius: 5,
        marginRight: 8,
        backgroundColor: background,
      }}>
      <Image
        source={{ uri: imageUri }}
        style={{ width: 100, aspectRatio: 1, resizeMode: 'cover' }}
      />
      <Text
        style={{
          fontSize: 16,
          position: 'absolute',
          color: 'white',
          fontWeight: 'bold',
          zIndex: 1,
          bottom: 5,
          left: 8,
        }}>
        {item.type}
      </Text>
    </View>
  );
};

export default CategoryItem
