


import React from 'react';
import { View, Text, Image,FlatList,useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {bannerCards} from '../constants/bannerCards'




const BannerCards=()=>{
  const {width}=useWindowDimensions()
  return (
    <FlatList
          data={bannerCards}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20, paddingLeft: 10 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ marginRight: 8 }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: width * 0.95,
                  height: 185,
                  resizeMode: 'cover',
                  borderRadius: 8,
                }}
              />
            </View>
          )}
        />
  )
}

export default BannerCards