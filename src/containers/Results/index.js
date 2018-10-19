
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppText, Header } from '../../components';
import { userData } from '../../services';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }
  }

  async componentWillMount() {
    const request = await userData()
      .then((request) => {
        this.setState({
          isLoading: false,
          dataSource: request.data
        }, function () {
          JSON.stringify(this.state.dataSource);
        });
      })
      .catch((error) => {
        console.error(error);
      });

  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.spinnerStyle}>
          <ActivityIndicator />
        </View>
      )
    }
    
    return (
      <View style={styles.container}>
        <View style={{ height: 80 }}>
          <Header icon onPress={() => Actions.pop()} title='Exam Results' />
        </View>

        <View style={styles.subContainer}>

          <AppText style={styles.text}>
            Hello {this.state.dataSource.first_name}
          </AppText>
          <AppText style={styles.text}>
            Your ID is {this.state.dataSource.id}
          </AppText>
        </View>
      </View>)
  }
}