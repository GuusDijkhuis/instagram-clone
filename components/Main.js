import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions'

export class Main extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<View styles={styles.container}>
				<Text>User is logged in!</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchProps)(Main);
