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
      bulb1_on: false
    }

    this.toggleLight = this.toggleLight.bind(this)
  }

  toggleLight() {
    if(this.state.bulb1_on) {
      this.setState({bulb1_on: false})
    }
    else {
      this.setState({bulb1_on: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 25, fontSize: 36, fontWeight: 'bold'}}>
          Minha Casa
        </Text>

        <View style={styles.boxContainer}>
          <TouchableOpacity
            onPress = {this.toggleLight}>
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
          </TouchableOpacity>
        </View>
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
});
