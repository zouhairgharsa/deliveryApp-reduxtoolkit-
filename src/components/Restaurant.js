import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {  Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Restaurant = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation=useNavigation()
  const { id,imageUri, title, rating, votes, miles, delivery } = item;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Restaurant',{id:id})}>
      <View
        style={{
          width: width * 0.75,
          backgroundColor: 'white',
          marginRight: 8,
          elevation: 10,
          marginTop: 8,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'lightgrey',
        }}>
        <ImageBackground
          source={{ uri: imageUri }}
          style={{ width: '100%', height: 150 }}>
          <View
            style={{
              backgroundColor: '#a62f26',
              alignSelf: 'flex-start',
              padding: 8,
              marginTop: 8,
              marginLeft: 8,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
              }}>
              15% off entire menu
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 'auto',
              position: 'absolute',
              bottom: -8,
              right: 8,
            }}>
            <Text style={{ fontSize: 17, fontWeight: '700' }}>20-30</Text>
            <Text>min</Text>
          </View>
        </ImageBackground>
        <View style={{ padding: 5 }}>
          <Text
            style={{
              color: '#2E3333',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {title}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="star" size={24} color="#4D7C1B" />
            <Text
              style={{
                fontSize: 18,
                color: '#4D7C1B',
                fontWeight: '600',
                marginHorizontal: 8,
              }}>
              {rating}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#4D7C1B',
                fontWeight: '600',
              }}>
              Excellent <Text style={{ color: '#585c5c' }}>({votes})</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#585c5c',
                fontWeight: '600',
              }}>
              {miles} miles {delivery} $ delivery
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurant;
