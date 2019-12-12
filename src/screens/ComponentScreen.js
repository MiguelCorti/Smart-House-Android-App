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
export default class ComponentScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{textAlign: 'center', marginTop: 25, fontSize: 36, fontWeight: 'bold', alignItems: 'center'}}>
          {this.props.component.component} {this.props.component.room}
        </Text>
        <View style={styles.inputContainer}>

        </View>

        <View style={styles.buttonContainer}>
          <DefaultButton
            onPress={() => console.log("")}
            //disabled={this.isButtonDisabled()}
            btnLabel={'Ligar'}
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
    marginTop: 50,
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
