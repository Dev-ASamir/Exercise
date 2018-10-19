
import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { TEXTS, COLORS } from '../../common';
import { Actions } from 'react-native-router-flux';
import { Input, AppText, Button, LoadingModal, Header } from '../../components';
import { bindActionCreators } from 'redux';
import { nameChanged, emailChanged, passwordChanged, loginUser } from '../../redux/actions/';
import styles from './styles';

class Register extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderError = this.renderError.bind(this);

  }

  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }


  onButtonPress() {
    const { Email, Password, Name } = this.props;
    this.props.loginUser({ Email, Password, Name });
  }


  renderError(error) {

    if (error.length > 0 && (!this.props.Name || !this.props.Email || !this.props.Password)) {
      return <AppText style={styles.errorText} >{error}</AppText>
    }
  }

  render() {
    console.log("loading" + this.props.loading)
    const { loading, error, Name, Email, Password } = this.props;
    return (
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}  >
        <View style={styles.container}>
          <Header icon onPress={() => Actions.pop()} title='Exam Results' />
          <View style={styles.subContainer}>
            <Input
              style={styles.inputStyle}
              placeholder={TEXTS.name}
              placeholderTextColor={COLORS.text}
              onChangeText={this.onNameChange}
              value={Name}
              returnKeyType={"go"}
            />

            <Input
              style={styles.inputStyle}
              placeholder={TEXTS.email}
              placeholderTextColor={COLORS.text}
              onChangeText={this.onEmailChange}
              value={Email}
              returnKeyType={"go"}
            />

            <Input
              style={styles.inputStyle}

              placeholder={TEXTS.password}
              placeholderTextColor={COLORS.text}
              secureTextEntry
              onChangeText={this.onPasswordChange}
              value={Password}
              returnKeyType={"go"}
            />

            <Button
              onPress={this.onButtonPress}
              style={styles.loginButton}
              textStyle={styles.txtBtn}>{TEXTS.register} </Button>


            <View style={{ height: 40 }} >
              {error.length > 0 && <View style={styles.errorContainer} >
                {this.renderError(error)}
              </View>}
            </View>

            {loading && <LoadingModal visible={loading} />}

          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { Name, Email, Password, error, loading } = auth;
  return { Name, Email, Password, error, loading };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    nameChanged, emailChanged, passwordChanged, loginUser
  }, dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(Register);

