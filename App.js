import { React } from 'react'
import * as firebase from '@firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCvnmmIstI0wTGviELoGhEM0dd0OF8pe_o",
  authDomain: "instagram-clone-161f5.firebaseapp.com",
  projectId: "instagram-clone-161f5",
  storageBucket: "instagram-clone-161f5.appspot.com",
  messagingSenderId: "345388273815",
  appId: "1:345388273815:web:aea23621cb48f82499d9d2",
  measurementId: "G-GFN04H1WK4"
};
firebase.initializeApp(firebaseConfig);

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login'
 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
			<Stack.Navigator initialRouteName="Landing">
				<Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
  );
}
