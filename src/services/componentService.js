import api from '../../axios';

class ComponentService {

	userSignUp(name, email, password) {
		return api.post('/auth/', {
			name,
			email,
			password
		})
		.then(response => {
			return response;
		})
		.catch(error => {
			throw error;
		});
	}

	userSignIn(email, password) {
		return {success: true, data: {email: "miguel.corti36@gmail.com", name: "Miguel Corti"}}
		// return api.post('/auth/sign_in.json', {
		// 	email,
		// 	password
		// })
		// .then(response => {
		// 	return response;
		// })
		// .catch(error => {
		//
		// 	throw error;
		// });
	}
}

export default new UserService();
