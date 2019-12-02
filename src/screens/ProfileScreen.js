import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject ('user')
@observer
export default class ProfileScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      bulb1_on: false,
      bulb2_on: false
    }

    this.toggleLight1 = this.toggleLight1.bind(this)
    this.toggleLight2 = this.toggleLight2.bind(this)
  }

  toggleLight1() {
    if(this.state.bulb1_on) {
      this.setState({bulb1_on: false})
    }
    else {
      this.setState({bulb1_on: true})
    }
  }

  toggleLight2() {
    if(this.state.bulb2_on) {
      this.setState({bulb2_on: false})
    }
    else {
      this.setState({bulb2_on: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 25, fontSize: 36, fontWeight: 'bold'}}>
          Minha Casa
        </Text>

        <TouchableOpacity onPress = {this.toggleLight1}>
          <View style={styles.boxContainer}>
            {this.state.bulb1_on ?
              <Image
                style={{width: 100, height: 100, marginTop: 10}}
                source={require('../../assets/images/bulb_on.png')}
              />
              :
              <Image
                style={{width: 100, height: 100, marginTop: 10}}
                source={require('../../assets/images/bulb_off.png')}
              />
            }
            <Text> Luz da Cozinha </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {this.toggleLight2}>
          <View style={styles.boxContainer}>
            {this.state.bulb2_on ?
              <Image
                style={{width: 100, height: 100, marginTop: 10}}
                source={require('../../assets/images/bulb_on.png')}
              />
              :
              <Image
                style={{width: 100, height: 100, marginTop: 10}}
                source={require('../../assets/images/bulb_off.png')}
              />
            }
            <Text> Luz da Sala </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress = {()=>this.props.navigation.navigate('AddComponent')}>
          <View style={styles.addBoxContainer}>
            <Image
              style={{width: 50, height: 50, marginTop: 10}}
              source={require('../../assets/images/plus.png')}
            />
            <Text> Novo </Text>
          </View>
        </TouchableOpacity>
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
    width: 150,
    height: 150,
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
