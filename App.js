import * as React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import BasketScreen from './src/screens/BasketScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const RootStack = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer theme={{ colors: { background: 'white' } }}>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Basket" component={BasketScreen} />
          </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>
);
