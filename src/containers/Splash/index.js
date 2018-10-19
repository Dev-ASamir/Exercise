import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Platform,
    Text,
    Image,
    View
} from 'react-native';
import { getDataFromLocalStorage } from '../../utils';
import Login from '../Login';
import { IMAGES } from '../../common';

export default class Splash extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (<View style={styles.container}>
            <Image source={IMAGES.logo} style={styles.logo} >
            </Image>
        </View>)
        return ((this.state.isVisible === true) ? Splash_Screen : <Login/>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.select({
            ios: 20,
        }),
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
      width: 150,
      height: 80
    }
});
