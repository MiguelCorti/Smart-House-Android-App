import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from 'react-native';
import {observer, inject} from 'mobx-react';
import DefaultButton from '../components/DefaultButton'

@inject ('user')
@observer
export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  updateEmail(text) {
    this.props.user.email = text
  }

  updatePassword(text) {
    this.props.user.password = text
  }

  isButtonDisabled() {
    return (this.props.user.email.length == 0 || this.props.user.password.length == 0)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{position: 'absolute', marginTop: 30, fontSize: 36, fontWeight: 'bold'}}>
          Login
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInput}
            onChangeText={text => this.updateEmail(text)}
            placeholder={"Digite seu email"}
            value={this.props.user.email}
            autoCapitalize='none'
          />

          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            onChangeText={text => this.updatePassword(text)}
            placeholder={"Digite sua senha"}
            value={this.props.user.password}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={() => this.props.navigation.navigate('Profile')}
            disabled={this.isButtonDisabled()}
            btnLabel={'Entrar'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  },

  inputContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emailInput: {
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 30,
    height: 50,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#4287f5',
    fontSize: 16
  },

  passwordInput: {
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#4287f5',
    fontSize: 16
  },

  buttonContainer: {
    alignSelf: 'stretch',
    flex: 0.1,
    justifyContent: 'flex-end',
    marginBottom: 25
  },

  registerText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFF',
  },
});
