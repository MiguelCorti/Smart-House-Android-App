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

	// Trigger Information
	@observable time = new Date('2020-06-12T14:42:42')
	@observable mode = '';
	@observable showTime = false
	@observable threshold = ''
	@observable componentId = -1;
	@observable sensorId = -1;
	@observable triggers = [];
	@observable sensorTriggers = [];

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
				full_component["componentName"] = this.component + ' ' + this.room
				this.components.push(full_component)
				this.success = true
				this.clearData()
			})
			.catch(error => {
				console.log(error)
			}
		);
	}

	@action
	async registerTrigger() {
		let timeString = this.time.getHours().toString() + ':' + this.time.getMinutes().toString()
		let body = {
			comp_id: this.components[this.componentId].id,
			action_time: timeString,
			mode: parseFloat(this.mode)
		}
		console.log(body)
		await api.post('/insert-time-constraint', body).then(
			response => {
				console.log(response)
				this.resp = response.data
				let full_trigger = body
				full_trigger["id"] = response.data.id
				full_trigger["componentName"] = this.components[this.componentId].componentName
				this.triggers.push(full_trigger)
				this.success = true
				this.clearData()
			})
			.catch(error => {
				console.log(error)
				let full_trigger = body
				full_trigger["componentName"] = this.components[this.componentId].componentName
				this.triggers.push(full_trigger)
			}
		);
	}

	@action
	async registerSensorTrigger() {
		let body = {
			comp_id: this.components[this.componentId].id,
			sensor_id: this.components[this.sensorId].id,
			threshold: parseFloat(this.threshold),
			mode: parseFloat(this.mode)
		}
		console.log(body)
		await api.post('/insert-sensor-config', body).then(
			response => {
				console.log(response)
				this.resp = response.data
				let full_trigger = body
				full_trigger["id"] = response.data.id
				full_trigger["componentName"] = this.components[this.componentId].componentName
				full_trigger["sensorName"] = this.components[this.sensorId].componentName
				this.sensorTriggers.push(full_trigger)
				this.success = true
				this.clearData()
			})
			.catch(error => {
				console.log(error)
				let full_trigger = body
				full_trigger["componentName"] = this.components[this.componentId].componentName
				full_trigger["sensorName"] = this.components[this.sensorId].componentName
				this.sensorTriggers.push(full_trigger)
			}
		);
	}

	@action
	async toggleLed(cp) {
		let mode = '1.0'
		if(cp.on) {
			mode = '0.0'
		}
		let url = '/control-led/' + cp.id + '/' + mode
		await api.get(url).then(
			response => {
				console.log(response)
				this.success = true
			})
			.catch(error => {
				console.log(error)
			}
		);
	}

	async toggleMotor(cp) {
		let speed = '0.5'
		if(cp.on) {
			speed = '0.0'
		}
		let url = '/control-motor/' + cp.id + '/' + speed
		await api.get(url).then(
			response => {
				console.log(response)
				this.success = true
			})
			.catch(error => {
				console.log(error)
			}
		);
	}

	@action
	clearData() {
		this.port1 = ''
		this.port2 = ''
		this.component = ''
		this.room = ''
		this.time = new Date('2020-06-12T14:42:42')
		this.mode = '';
		this.showTime = false
		this.threshold = ''
		this.componentId = -1;
		this.sensorId = -1;
	}

}
