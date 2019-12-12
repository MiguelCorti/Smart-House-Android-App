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

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', marginTop: 25, fontSize: 36, fontWeight: 'bold', alignItems: 'center'}}>
          Gatilhos
        </Text>

        <ScrollView style={{alignSelf: 'stretch'}} contentContainerStyle={{alignItems: 'center'}}>
          <TouchableOpacity onPress = {()=>this.props.navigation.navigate('AddComponent')}>
            <View style={styles.addBoxContainer}>
              <Image
                style={{width: 50, height: 50, marginTop: 10}}
                source={require('../../assets/images/plus.png')}
              />
              <Text> Novo </Text>
            </View>
          </TouchableOpacity>
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
