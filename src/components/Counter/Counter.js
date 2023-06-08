import React from 'react';
import {View,Text} from 'react-native';
import styles from './Counter.style';

const Counter = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.intxt}>Yapılacaklar</Text>
            <Text style={styles.counter} >{props.setCounter}</Text>
        </View>
    );
}
export default Counter;