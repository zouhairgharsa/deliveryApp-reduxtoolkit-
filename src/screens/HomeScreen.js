import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
 
  ScrollView,
  FlatList,
  
  useWindowDimensions,
} from 'react-native';
import { BannerCards } from '../components';

import Constants from 'expo-constants';
import categories from '../constants/categories';
import data from '../constants/data';

import { HeaderUser, SearchBar, CategoryItem, Restaurant } from '../components';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 999,
          paddingHorizontal: 10,
          height: 150,
          paddingBottom: 12,
          elevation: 17,

          paddingTop: Constants.statusBarHeight,
        }}>
        <HeaderUser />
        <SearchBar />
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 150 }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20, paddingLeft: 10 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />

        <BannerCards />
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            paddingLeft: 10,
            paddingBottom: 10,
            backgroundColor: '#ecf0f1',
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text
                style={{
                  color: '#2e3333',
                  fontSize: 25,
                  fontWeight: 'bold',
                  lineHeight: 36,
                }}>
                {item.categories}
              </Text>
              <FlatList
                data={item.contents}
                contentContainerStyle={{ marginBottom: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => <Restaurant item={item} />}
              />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
