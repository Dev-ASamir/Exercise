import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../common';

export default styles = StyleSheet.create({
    container: {
        marginTop: Platform.select({
            ios: 20,
        }),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});