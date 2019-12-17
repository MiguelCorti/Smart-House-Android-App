import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject ('user')
@inject ('component')
@observer
export default class ProfileScreen extends Component {
  constructor(props){
    super(props);
  }

  async componentPressed(index) {
    let cp = this.props.component.components[index]
    if(cp.component == "led") {
      await this.props.component.toggleLed(cp)
    } else {
      await this.props.component.toggleMotor(cp)
    }
    if(this.props.component.success) {
      this.props.component.success = false
      if(cp.on) {
        this.props.component.components[index].on = false
      } else {
        this.props.component.components[index].on = true
      }
    }
  }

  renderComponents() {
    return this.props.component.components.map((cp, i) => {
      return (
        <TouchableOpacity onPress = {()=>this.componentPressed(i)} key = {i}>
          <View style={styles.boxContainer}>
            {cp.on ?
              (<View
                style={{marginTop: 10, backgroundColor: '#0a0', width: 75, height: 75, borderWidth: 2, borderRadius: 100, borderColor: '#0d0'}}
              />)
              :
              (<View
                style={{width: 75, height: 75, marginTop: 10, borderWidth: 2, backgroundColor: '#ccc', borderRadius: 100, borderColor: '#888'}}
              />)
            }
            <Text style={{textAlign: 'center'}}>{cp.componentName}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 0, fontSize: 36, fontWeight: 'bold'}}>
          Componentes
        </Text>
        <ScrollView style={{alignSelf: 'stretch'}} contentContainerStyle={{alignItems: 'center'}}>
          {this.renderComponents()}

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
