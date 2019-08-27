import React from 'react';
import {Image, Platform, SrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
//import {Test} from './../components/AppComponents'
export default class Test extends React.Component {
    static navigationOptions={
        header:null,
    };
    render() {
        return( 
            <View style={{paddingTop:20}}>
                <Text>Hello</Text>
            </View>
        )
    }
} 