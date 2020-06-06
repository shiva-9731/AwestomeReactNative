import React  from 'react';
import {StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function TodoItem({item, removeItem}){
    return (
        <View style={Styles.item}>
            <TouchableOpacity onPress = {() => removeItem(item.key)}>
                <MaterialIcons name="delete" style={Styles.deleteButton}/>
            </TouchableOpacity>
            <Text style={Styles.itemText}> 
                {item.name} 
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 16,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20
    },
    deleteButton: {
        fontSize: 20,
        color: '#333',
        marginLeft: 10
    }
})