
import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { TEXTS, COLORS } from '../../common';
import { Actions } from 'react-native-router-flux';
import { Input, AppText, Button, Header } from '../../components';
import { loginEmailChanged, loginPasswordChanged, signInUser } from '../../redux/actions/';
import { bindActionCreators } from 'redux';
import styles from './styles';

class Login extends Component {


  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderError = this.renderError.bind(this);

  }


  onEmailChange(text) {
    this.props.loginEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.loginPasswordChanged(text);
  }


  onButtonPress() {
    const { Login_Email, Login_Password } = this.props;
    this.props.signInUser({ Login_Email, Login_Password });
  }


  renderError(Login_error) {
    if (Login_error.length > 0) {
      return <AppText style={styles.errorText} >{Login_error}</AppText>
    }
  }


  render() {
    const { Login_Email, Login_Password, Login_error, Login_loading } = this.props;
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: COLORS.white }}  >
        <View style={styles.container}>
          <View style={{ height: 80 }}>
            <Header title='Exam Results' />
          </View>
          <View style={styles.subContainer}>
            <Input
              style={styles.inputStyle}
              placeholder={TEXTS.email}
              placeholderTextColor={COLORS.text}
              onChangeText={this.onEmailChange}
              value={Login_Email}
              returnKeyType={"go"}
            />

            <Input
              style={styles.inputStyle}

              placeholder={TEXTS.password}
              placeholderTextColor={COLORS.text}
              secureTextEntry
              onChangeText={this.onPasswordChange}
              value={Login_Password}
              returnKeyType={"go"}
            />

            <Button
              onPress={this.onButtonPress}
              style={styles.loginButton}
              textStyle={styles.txtBtn}>{TEXTS.login}</Button>

            <Button
              onPress={() => Actions.register() }
              style={styles.loginButton}
              textStyle={styles.txtBtn}>{TEXTS.register} </Button>


            <View style={{ height: 40 }} >
              {Login_error.length > 0 && <View style={styles.errorContainer} >
                {this.renderError(Login_error)}
              </View>}
            </View>



          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  const { Login_Email, Login_Password, Login_error, Login_loading } = loginReducer;
  return { Login_Email, Login_Password, Login_error, Login_loading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loginEmailChanged, loginPasswordChanged, signInUser
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
