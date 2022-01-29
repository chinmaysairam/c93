import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import MyDatePicker from '../components/DatePicker'

export default class SaveRemainder extends React.Component {
  constructor() {
    super();
    this.state = {
      remaindername: '',
      remainderdate: null,
      remaindertime: null,
    };
  }

  render() {
    return (
      <View>
      <SafeAreaView/>
        <Text>Save Remainder</Text>
        <TextInput
        style={styles.inputBox}
          placeholder={'Remaider Name'}
          onChangeText={(text) => {
            this.setState({ remaindername: text });
          }}
        />
       
        <MyDatePicker myRemainder={this.state.remaindername}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
 fontSize: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
