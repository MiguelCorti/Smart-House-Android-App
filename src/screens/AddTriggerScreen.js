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
  Picker,
  Button
} from 'react-native';
import {observer, inject} from 'mobx-react';
import DefaultButton from '../components/DefaultButton'
import DateTimePicker from '@react-native-community/datetimepicker';

@inject ('component')
@observer
export default class AddTriggerScreen extends Component {
  constructor(props) {
    super(props);
    //this.props.component.time = new Date().getDate()
  }

  updateTime(time) {
    this.props.component.time = time
    this.props.component.showTime = false
  }

  updateComponentId(text) {
    this.props.component.componentId = text
  }

  updateMode(text) {
    this.props.component.mode = text
  }

  showTime(){
    this.props.component.showTime = true
  }

  isButtonDisabled() {
    return (this.props.component.componentId == -1 || this.props.component.mode.length == 0)
  }

  async buttonPressed() {
    await this.props.component.registerTrigger();
    if(this.props.component.success) {
      this.props.component.success = false
      this.props.navigation.navigate('ListTrigger');
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', alignItems: 'center'}}>
          Adicionar Gatilho
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Escolha o componente:
          </Text>
          <View style={{width:150, borderWidth: 1, borderRadius: 10}}>
            <Picker
              selectedValue={this.props.component.componentId}
              style={styles.componentInput}
              onValueChange={(value, index) => this.updateComponentId(value)}
            >
              <Picker.Item label="..." value={-1}/>
              {this.props.component.components.map((cp, i) => {
                let splitted = cp.component.split('_')
                if(splitted.length <= 1) {
                  return (<Picker.Item label={cp.componentName} value={i} key={i}/>)
                }
              })}
            </Picker>
          </View>

          <Text style={{marginTop: 15, fontSize: 16, fontWeight: 'bold'}}>
            Escolha a hora que vai ligar:
          </Text>
          <View style={{width:150, borderWidth: 1, borderRadius: 10}}>
            <TouchableOpacity
              onPress={()=>this.showTime()}
              style={{padding: 10, marginTop: 0, marginBottom: 0}}>
              <Text style={{textAlign: 'center', fontSize: 16,color: '#000'}}>
                {this.props.component.time.getHours()}:{this.props.component.time.getMinutes()}
              </Text>
            </TouchableOpacity>
          </View>
          {this.props.component.showTime && <DateTimePicker
            value={this.props.component.time}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={(ev, time)=>this.updateTime(time)}
          />}

          <Text style={{marginTop: 15, fontSize: 16, fontWeight: 'bold'}}>
            Escolha o que vai acontecer:
          </Text>
          <View style={{width:150, borderWidth: 1, borderRadius: 10}}>
            <Picker
              selectedValue={this.props.component.mode}
              style={styles.componentInput}
              onValueChange={(value, index) => this.updateMode(value)}
            >
              <Picker.Item label="..." value=""/>
              <Picker.Item label="Ligar" value="1.0"/>
              <Picker.Item label="Desligar" value="0.0"/>
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
    width: 150,
    height: 50,
    color: '#000',
    borderWidth: 1,
    borderColor: '#4287f5',
    fontSize: 16
  },

  modeInput: {
    width: 60,
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
});
