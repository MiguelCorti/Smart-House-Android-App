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
import DefaultButton from '../components/DefaultButton'

export default class AddComponentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensor: "",
      room: ""
    };
  }

  updateSensor(text) {
    this.setState({sensor: text})
  }

  updateRoom(text) {
    this.setState({room: text})
  }

  isButtonDisabled() {
    return (this.state.sensor.length == 0 || this.state.room.length == 0)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{position: 'absolute', marginTop: 25, fontSize: 36, fontWeight: 'bold', alignItems: 'center'}}>
          Adicionar Componente
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.emailInput}
            onChangeText={text => this.updateSensor(text)}
            placeholder={"Digite o sensor"}
            value={this.state.sensor}
            autoCapitalize='none'
          />

          <TextInput
            style={styles.passwordInput}
            secureTextEntry={true}
            onChangeText={text => this.updateRoom(text)}
            placeholder={"Digite o ambiente"}
            value={this.state.room}
            autoCapitalize='none'
          />
        </View>

        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={() => this.props.navigation.navigate('Profile')}
            disabled={this.isButtonDisabled()}
            btnLabel={'Adicionar'}
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
