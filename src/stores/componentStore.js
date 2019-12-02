//Defines state related to the user's session and actions
//import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';
import ComponentService from '../services/userService';

export default class UserStore {
	//User information
	@observable sensor = '';
	@observable room = '';
	@observable ports = '';
	@observable resp = {};

	//Auxiliando chamadas
	@observable success = false;
	@observable hasError = false;
	@observable errorMsg = '';

	@action
	async registerComponent() {
		this.resp = ComponentService.registerComponent(this.sensor, this.room, this.ports)

		// await UserService.userSignIn(this.email, this.password).then(
		// 	response => {
		// 		console.log(response);
		//
		// 		this.email = response.data.data.email;
		// 		this.name = response.data.data.name;
		// 		this.success = true;
		// 	},
		// 	error => {
		// 		console.log(error)
		// 		this.success = false;
		//
		// 		if(error.response.status == 500)
		// 			this.errorMsg = 'Tente novamente mais tarde...'
		// 		else
		// 			this.errorMsg = error.response.data.errors[0];
		// 	}
		// );
	}

	@action
	clearData() {
		this.name = '';
		this.email = '';
		this.password = '';
		this.success = false
		this.hasError = false;
		this.errorMsg = '';
	}

}
