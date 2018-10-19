import React from 'react';
import {StyleSheet ,Text, TouchableOpacity } from 'react-native';
import {AppText} from './AppText';
import PropTypes from 'prop-types';


const Button = ({ onPress,textStyle ,children, buttonColor ,style}) => {

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={
        [styles.buttonContainer,
        {backgroundColor: buttonColor},
        style]}>
      <AppText style={[styles.buttonText, textStyle]}>{children}</AppText>
    </TouchableOpacity>
  );
};



Button.propTypes = {
  onPress : PropTypes.func.isRequired,
  children : PropTypes.node.isRequired,
  buttonColor : PropTypes.string,
}


export  {Button};


const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 40,
    alignItems:'center',
    justifyContent:'center',
    elevation:1,
    shadowColor:'#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius:2
},
buttonText:{
  padding:10,
  color:'white',
  backgroundColor:'transparent'
}
});