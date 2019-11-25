import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', top: 100, alignItems: 'center'}}>
          <Image
            style={{width: 200, height: 200}}
            source={require('../../assets/images/house-icon.png')}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.registerText}>Criar uma conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={{padding: 10, marginTop: 11, marginBottom: 35}}>
          <Text style={styles.loginText}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  button: {
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4287f5'
  },

  loginText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#000',
  },

  registerText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFF',
  },
});
