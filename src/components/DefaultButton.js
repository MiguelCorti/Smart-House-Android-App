import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

export default class DefaultButton extends Component {

	render() {
		const propStyle = {backgroundColor: this.props.disabled ? '#CCCCCC' : (this.props.backgroundColor || Colors.defaultButton)};
		const combinedStyles = StyleSheet.flatten([styles.button, propStyle]);

		return (
			<TouchableOpacity
			testID={this.props.testID}
			disabled = {this.props.disabled}
			accessible={true}
			onPress = {this.props.onPress}
			style={combinedStyles}
			underlayColor='#fff'>
				<Text style = {{fontSize: 16, color: this.props.textColor || '#FFFFFF'}}>
					{this.props.btnLabel}
				</Text>
	    	</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
	}
});
