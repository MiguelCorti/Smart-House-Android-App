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
export default class ListTriggerScreen extends Component {
  constructor(props) {
    super(props);
  }

  triggerPressed(i) {

  }

  renderTriggers() {
    if(this.props.component.triggers.length == 0) {
      return (<Text style={{marginTop: 10, textAlign: 'center', fontSize: 13, color: '#aaa'}}>Não achamos gatilhos{'\n'}de tempo.</Text>)
    } else {
      return this.props.component.triggers.map((tg, i) => {
        return (
          <TouchableOpacity onPress = {this.triggerPressed(i)} key = {i}>
            <View style={styles.boxContainer}>
              <View
                style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, width: 75, height: 75}}
              >
                <Image
                  style={{width: 65, height: 65, marginTop: 0}}
                  source={require('../../assets/images/clock.png')}
                />
              </View>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}> {tg.componentName}</Text>
              <Text style={{textAlign: 'center'}}> {tg.action_time} - {tg.mode}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
  }

  renderSensorTriggers() {
    if(this.props.component.sensorTriggers.length == 0) {
      return (<Text style={{marginTop: 10, textAlign: 'center', fontSize: 13, color: '#aaa'}}>Não achamos gatilhos{'\n'}de sensor.</Text>)
    } else {
      return this.props.component.sensorTriggers.map((tg, i) => {
        return (
          <TouchableOpacity onPress = {this.triggerPressed(i)} key = {i}>
            <View style={styles.boxContainer}>
              <View
                style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, width: 75, height: 75}}
              >
                <Image
                  style={{width: 80, height: 80, marginTop: 0}}
                  source={require('../../assets/images/sensor.png')}
                />
              </View>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 11}}> {tg.sensorName}</Text>
              <Text style={{textAlign: 'center', fontSize: 12}}> {tg.componentName}</Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', marginTop: 0, fontSize: 36, fontWeight: 'bold', alignItems: 'center'}}>
          Gatilhos
        </Text>
        <ScrollView style={{alignSelf: 'stretch'}} contentContainerStyle={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{textAlign: 'center', marginTop: 0, fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
                De Tempo
              </Text>
              {this.renderTriggers()}
              <TouchableOpacity onPress = {()=>this.props.navigation.navigate('AddTrigger')}>
                <View style={styles.addBoxContainer}>
                  <Image
                    style={{width: 50, height: 50, marginTop: 10}}
                    source={require('../../assets/images/plus.png')}
                  />
                  <Text style={{textAlign: 'center', fontSize: 12}}>Novo Gatilho Tempo</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginLeft: 20, flexDirection: 'column', alignItems: 'center'}}>
              <Text style={{textAlign: 'center', marginTop: 0, fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
                De Sensor
              </Text>
              {this.renderSensorTriggers()}
              <TouchableOpacity onPress = {()=>this.props.navigation.navigate('AddSensorTrigger')}>
                <View style={styles.addBoxContainer}>
                  <Image
                    style={{width: 50, height: 50, marginTop: 10}}
                    source={require('../../assets/images/plus.png')}
                  />
                  <Text style={{textAlign: 'center', fontSize: 12}}>Novo Gatilho Sensor</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  loginText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#FFF',
  },

  boxContainer: {
    width: 125,
    height: 125,
    borderRadius: 30,
    borderColor: '#111',
    borderWidth: 2,
    marginTop: 25,
    alignItems: 'center'
  },

  addBoxContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111',
    borderWidth: 2,
    marginTop: 25,
    alignItems: 'center'
  },
});
