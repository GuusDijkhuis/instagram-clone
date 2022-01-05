import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login'
 
const Stack = createStackNavigator();

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		onAuthStateChanged(getAuth(), (user) => {
			if(!user) {
				this.setState({
					loggedIn: false,
					loaded: true
				})
			} else {
				this.setState({
					loggedIn: true,
					loaded: true
				})
			}
		})
	}

	render() {
		const { loggedIn, loaded } = this.state;

		if(!loaded) {
			return (
				<View styles={styles.container}>
					<Text>Loading!</Text>
				</View>
			)
		}

		if(!loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Landing">
						<Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen name="Login" component={LoginScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			)
		}
		
		return (
			<View styles={styles.container}>
				<Text>User is logged in!</Text>
			</View>
		)
	}
}

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})