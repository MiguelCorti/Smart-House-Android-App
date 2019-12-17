import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Picker
} from 'react-native';
import {observer, inject} from 'mobx-react';
import DefaultButton from '../components/DefaultButton'

@inject ('component')
@observer
export default class AddComponentScreen extends Component {
  constructor(props) {
    super(props);
  }

  updateComponent(text) {
    this.props.component.component = text
  }

  updateRoom(text) {
    this.props.component.room = text
  }

  updatePort1(text) {
    this.props.component.port1 = text
  }

  updatePort2(text) {
    this.props.component.port2 = text
  }

  isButtonDisabled() {
    return (this.props.component.component.length == 0 || this.props.component.room.length == 0
      || this.props.component.port1.length == 0)
  }

  async buttonPressed() {
    await this.props.component.registerComponent();
    if(this.props.component.success) {
      this.props.component.success = false
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', alignItems: 'center'}}>
          Adicionar Componente
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Escolha o componente:
          </Text>
          <View style={{width:150, borderWidth: 1, borderRadius: 10}}>
            <Picker
              selectedValue={this.props.component.component}
              style={styles.componentInput}
              onValueChange={(value, index) => this.updateComponent(value)}
            >
              <Picker.Item label="Luz" value="led"/>
              <Picker.Item label="Ventilador" value="motor"/>
              <Picker.Item label="Sensor Distância" value="distance_sensor"/>
              <Picker.Item label="Sensor Movimento" value="motion_sensor"/>
              <Picker.Item label="Sensor Luz" value="light_sensor"/>
            </Picker>
          </View>

          <Text style={{marginTop: 15, fontSize: 16, fontWeight: 'bold'}}>
            Digite as portas do componente:
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              keyboardType = 'number-pad'
              maxLength = {2}
              style={[styles.portInput,{marginRight: 25,justifyContent: 'center'}]}
              onChangeText={text => this.updatePort1(text)}
              placeholder={"P1"}
              value={this.props.component.port1}
              autoCapitalize='none'
            />
            <TextInput
              keyboardType = 'number-pad'
              maxLength = {2}
              style={[styles.portInput,{justifyContent: 'center'}]}
              onChangeText={text => this.updatePort2(text)}
              placeholder={"P2"}
              value={this.props.component.port2}
              autoCapitalize='none'
            />
          </View>

          <Text style={{marginTop: 15, fontSize: 16, fontWeight: 'bold'}}>
            Escolha o ambiente:
          </Text>
          <View style={{width:150, borderWidth: 1, borderRadius: 10}}>
            <Picker
              selectedValue={this.props.component.room}
              style={styles.roomInput}
              onValueChange={(value, index) => this.updateRoom(value)}
            >
              <Picker.Item label="Quarto" value="quarto"/>
              <Picker.Item label="Sala" value="sala"/>
              <Picker.Item label="Cozinha" value="cozinha"/>
              <Picker.Item label="Banheiro" value="banheiro"/>
            </Picker>
          </View>

        </View>

        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={() => this.buttonPressed()}
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
    marginTop: 20,
    alignItems: 'center',
  },

  componentInput: {
    //alignSelf: 'stretch',
    width: 150,
    height: 50,
    color: '#000',
    borderWidth: 1,
    borderColor: '#4287f5',
    fontSize: 16
  },

  roomInput: {
    //alignSelf: 'stretch',
    width: 150,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#4287f5',
    fontSize: 16
  },

  portInput: {
    width: 50,
    color: '#000',
    textAlign: 'center',
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
