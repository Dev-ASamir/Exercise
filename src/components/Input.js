import React, { Component } from 'react';
import { View, StyleSheet, Keyboard, TextInput, Text , Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../common';
import PropTypes from 'prop-types';




class Input extends Component {
    render() {
        const {
           // icon,
            placeholder,
            maxLength,
            size,
            value,
            onChangeText,
            secureTextEntry,
            keyboardType,
            returnKeyType,
            style,
            textInputStyle,
            placeholderTextColor
        } = this.props;
        return (
            <View style={[styles.inputContainer, style]}>

                <TextInput
                    style={[styles.textInput, textInputStyle]}
                    placeholder={placeholder}
                    maxLength={maxLength || 40}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={placeholderTextColor || '#fff'}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry || false}
                    keyboardType={keyboardType || 'default'}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={() => Keyboard.dismiss()}

                />
                { /*  <Icon name={icon} size={size || 35} style={styles.icon} />*/}
            </View>
        );
    }

}


Input.propTypes = {
   // icon: PropTypes.string,
    size: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    maxLength: PropTypes.number,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string
}

export { Input };

const styles = StyleSheet.create({
    inputContainer: {
        height: 50,
        alignSelf: 'stretch',
        color: COLORS.text,
        padding: 5,
        backgroundColor: 'gray',
        opacity: .7

    },
 
    textInput: {
        flex: 1,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        textAlign: 'left',
        fontSize: 18
    }
})

