import React from 'react';
import {Text} from 'react-native';

const AppText = ({children, style, ...rest})=>{
    return (
        <Text style={[style]} {...rest}>{children}</Text>
    )
}

export {AppText};

