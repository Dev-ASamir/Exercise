import React, { Component } from 'react';
import { View, StyleSheet, Image, Text , TouchableOpacity} from 'react-native';
import { IMAGES, COLORS } from '../common';
import { AppText } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';



class Header extends Component {
    render() {
        const { title , onPress} = this.props;
        let icon = this.props.icon ?
            <TouchableOpacity style={styles.backIcon} onPress={onPress}>
                <View style={styles.backIcon}><Icon name="chevron-left" size={23} color={COLORS.black} /></View>
            </TouchableOpacity>
            : null;
        return (
            <View style={styles.container} >
                {icon}
                <AppText style={styles.title}>{title}</AppText>
            </View>
        );
    }
}

export { Header };


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: '100%',
        elevation: 1,
        shadowColor: '#4e2202',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.49,
        backgroundColor: COLORS.bg,
        flex: 1
    },
    title: {
        color: COLORS.black,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    },
    backIcon: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
    },

})