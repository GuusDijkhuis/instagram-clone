import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}

		this.onSignIn = this.onSignIn.bind(this);
	}

	onSignIn() {
		const { email, password, name } = this.state;
		signInWithEmailAndPassword(getAuth(), email, password)
		.then(result => console.log(result))
		.then(error => console.log(error))
	}

	render() {
		return (
			<View>
				<TextInput 
					placeholder="email"
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput 
					placeholder="password"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button 
					onPress={() => this.onSignIn()}
					title="Sign In"
				/>
			</View>
		)
	}
}
