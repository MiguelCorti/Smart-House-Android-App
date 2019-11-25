import api from '../../axios';

class UserService {

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
		return api.post('/auth/sign_in.json', {
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
}

export default new UserService();
