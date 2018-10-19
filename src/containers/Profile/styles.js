import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        justifyContent: 'center',
        alignItems: 'center',
        flex :1,
        backgroundColor: COLORS.white
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    loginButton: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 15,
        backgroundColor: '#273c75',
    },
    txtBtn: {
        color: COLORS.white,
        fontSize: 18
    },
});