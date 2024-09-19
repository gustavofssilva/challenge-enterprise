import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Creditos from './src/screens/Creditos';
import Menu from './src/screens/Menu';

const Stack = createStackNavigator();

const defaultScreenOptions = ({ navigation }) => ({
  headerLeft: () => (
    navigation.canGoBack() ? (
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: '#FF6F61', fontSize: 16, fontWeight: 'bold' }}>Voltar</Text>
      </TouchableOpacity>
    ) : null
  ),
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'transparent',
  },
  headerTintColor: '#FF6F61',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Creditos" component={Creditos} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
