
import React, { Component } from 'react';
import {View} from 'react-native';
import { TEXTS, } from '../../common';

import {  AppText, Button, Header } from '../../components';
import { getDataFromLocalStorage } from '../../utils';

import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default class Profile extends Component {

  constructor() {
    super();
    this.state = {
      email: ''
    }
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  componentWillMount() {
    this.fetchUserData()
  }

  async fetchUserData() {
    const user = await getDataFromLocalStorage('@USER_DATA');
    this.setState({ email: user.Email });

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ height: 80 }}>
          <Header title='Exam Results' />
        </View>

        <View style={styles.subContainer}>

          <AppText style={styles.text}>
            Your Email is 
          </AppText>
          
          <AppText style={styles.text}>
            {this.state.email}
          </AppText>

          <AppText>
            To Know Your Exam Results Press The Button
          </AppText>

          <Button
            onPress={() => Actions.results()}
            style={styles.loginButton}
            textStyle={styles.txtBtn}>{TEXTS.showResults}</Button>

        </View>
      </View>)
  }
}