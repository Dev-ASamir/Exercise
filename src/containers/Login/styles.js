import { StyleSheet, Platform } from 'react-native';
import { COLORS} from '../../common';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.select({ ios: 20, }),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    subContainer:{
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    inputStyle:{
        height: 50,
        alignSelf: 'stretch',
        borderRadius: 10,
        padding: 5,
        margin: 15,
        backgroundColor: COLORS.btnColor,
    },
    loginButton: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 15,
        backgroundColor: COLORS.btnColor,
    },
    txtBtn: {
        color: COLORS.white,
        fontSize: 18
    },
    registerButton: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 15,
        backgroundColor: COLORS.black,
    },
    errorContainer: {
        height: 30,
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    errorText: {
        color: COLORS.white,
        padding: 5
    }
});