import React , {useState} from 'react';
import {StyleSheet, View, TextInput,Button} from 'react-native';


export default function AddTood({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style= {styles.input}
                placeholder = 'New Todo.....'
                onChangeText = {changeHandler}
            />
            
            <Button style = {styles.buttonContainer} title = "add todo" onPress={() => submitHandler(text)} color="coral" />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        margin: 10,
        height: 35,
        color: 'black'
      },
      buttonContainer: {
        // marginTop: 20,
        padding: 10,
        margin: 10,
        height: 35
      },
})