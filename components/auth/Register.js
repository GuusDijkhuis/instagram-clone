import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

import { db } from '../../firebaseConfig';

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			name: ''
		}
		this.onSignUp = this.onSignUp.bind(this);
	}

	onSignUp() {
		const { email, password, name } = this.state;
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredentials) => {
			setDoc(doc(db, "users", userCredentials.user.uid), { email, password, name });
		})
		.then(error => console.log(error))
	}

	render() {
		return (
			<View>
				<TextInput 
					placeholder="name"
					onChangeText={(name) => this.setState({ name })}
				/>
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
					onPress={() => this.onSignUp()}
					title="Sign Up"
				/>
			</View>
		)
	}
}
