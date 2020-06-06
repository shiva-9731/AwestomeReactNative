import React , {useState} from 'react';
import {StyleSheet, View,FlatList,Text} from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.constainer}>
            <Text style={styles.boxOne}>Sandbox1</Text>
            <Text style={styles.boxTwo}>Sandbox2</Text>
            <Text style={styles.boxThree}>Sandbox3</Text>
            <Text style={styles.boxFour}>Sandbox4</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    constainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end', 
        marginTop: 25,
        padding: 10,
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
        // margin: 10,
        // height: 40
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 20,
        // margin: 10,
        // height: 40
    },
    boxThree: {
        backgroundColor: 'red',
        padding: 30,
        // margin: 10,
        // height: 40
    },
    boxFour: {
        backgroundColor: 'green',
        padding: 40,
        // margin: 10,
        // height: 40
    }
})