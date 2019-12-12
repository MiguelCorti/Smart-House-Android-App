//import AsyncStorage from '@react-native-community/async-storage';
import { observable, action } from 'mobx';
import ComponentService from '../services/componentService';
import api from '../../axios';

export default class ComponentStore {
	//Component information
	@observable component = '';
	@observable room = '';
	@observable port1 = '';
	@observable port2 = '';
	@observable components = [];
	@observable resp = {};

	//Auxiliando chamadas
	@observable success = false;
	@observable hasError = false;
	@observable errorMsg = '';

	@action
	async registerComponent() {
		let portsArray = [parseInt(this.port1)]
		if(this.port2 != '') {
			portsArray.push(parseInt(this.port2))
		}
		let body = {
			component: this.component,
			env: this.room,
			ports: portsArray
		}
		console.log(body)
		await api.post('/insert-component', body).then(
			response => {
				console.log(response)
				this.resp = response.data
				let full_component = body
				full_component["id"] = response.data.id
				full_component["on"] = false
				this.components.push(full_component)
				this.clearData()
			})
			.catch(error => {
				console.log(error)
				let full_component = body
				//full_component["id"] = response.data.id
				full_component["on"] = false
				this.components.push(full_component)
			}
		);
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
		this.port1 = ''
		this.port2 = ''
		this.component = ''
		this.room = ''
	}

}
