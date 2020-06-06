import React , {useState} from 'react';
import { StyleSheet, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header'
import TodoItem from './components/todoItem'
import Form from './components/form'
import Sandbox from './components/sandbox'

export default function App() {
  const [users, setUsers] = useState([
      {name: 'shivakumara m', age: '25', key: '1'},
      {name: 'aishwarya', age: '23',key: '2' },
      {name: 'rashmi balkur', age: '24',key: '3'}
  ]);

  const removeItem = (id) => {
    console.log("You pressed", id)
    setUsers((prevState) => {
      return prevState.filter(user => user.key != id)
    })
  }

  const submitHandler = (value) => {
    if(value.length > 3){
      setUsers((prevState) => {
        return [{name: value,key: Math.random().toString()},...prevState]
      })
    }else{
      Alert.alert('Oops!','Todos must be over 3 chars long',[{text: 'Understood', onPress: () => console.log('alert closed')}])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log("Dismissed keyboard!")
    }}>
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <Form submitHandler = {submitHandler}/>

        <View style={styles.list}>
          <FlatList 
            data={users}
            renderItem={({item}) => (
            // <Text style={styles.content}>{item.name}</Text>
            <TodoItem removeItem = {removeItem} item ={item}/>
            )}          
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback> 
    
    // <Sandbox/> 
    
)
  
  
  // const [name, setName] = useState('Aishwarya M')
  // const [age, setAge] = useState('25')
  // const [users, setUsers] = useState([
  //   {name: 'shivakumara m', age: '25', id: '1'},
  //   {name: 'aishwarya', age: '23',id: '2' },
  //   {name: 'rashmi balkur', age: '24',id: '3'},
  //   {name: 'lakshmi talari', age: '26',id: '4'},
  //   {name: 'sharada', age: '28',id: '5'},
  //   {name: 'ashwini', age: '29',id: '6'},
  //   {name: 'shivakumara m', age: '25', id: '7'},
  //   {name: 'aishwarya', age: '23',id: '8' },
  //   {name: 'rashmi balkur', age: '24',id: '9'},
  //   {name: 'lakshmi talari', age: '26',id: '10'},
  //   {name: 'sharada', age: '28',id: '11'},
  //   {name: 'ashwini', age: '29',id: '12'}
  // ])

  // const pressHandler = (id) => {
  //   // setName('Shivakumara m') 
  //   // setAge('26')
  //   console.log("You pressed", id)
  //   setUsers((prevState) => {
  //     return prevState.filter(user => user.id != id)
  //   })
  // }

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>Name : {name} Age : {age}</Text>
  //       <TextInput 
  //       multiline
  //       style={styles.input} 
  //       placeholder='Enter name'
  //       onChangeText = {(value) => {
  //         setName(value)
  //       }}
  //    />

  //     <TextInput 
  //       keyboardType='numeric'
  //       style={styles.input} 
  //       placeholder='Enter age'
  //       onChangeText = {(value) => {
  //         setAge(value)
  //       }}
  //    />
      
  //     <View style={styles.buttonContainer}>
  //       <Button title="Click Me" onPress={pressHandler}/>
  //     </View>

  //       <FlatList
  //         numColumns={2}
  //         keyExtractor={(item) => item.id }
  //         data = {users}
  //         renderItem={({item}) =>(
  //         <TouchableOpacity onPress={() => pressHandler(item.id)}>
  //           <Text style={styles.item}>{item.name}</Text>
  //         </TouchableOpacity>
  //         )}
  //       />
 
  //     {/* <ScrollView style={styles.scrollView}>
  //       {users.map(user => (<View key = {user.key}><Text style={styles.item}>{user.name}</Text></View>))}
  //     </ScrollView>
  // */}
  //   </View>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 10
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10, 
    margin: 10,
    height: 35
  },
  text: {
    padding: 10,
    marginTop: 30,
  },
  item: {
    marginTop: 10,
    padding: 30, 
    alignItems: 'center',
    backgroundColor: 'pink',
    fontSize: 14,
    marginHorizontal: 10,
    marginTop: 24
  },
  content: {
    padding: 10,
    backgroundColor: 'pink',
    flex: 1
  },
  list: {
    marginTop: 10,
    // backgroundColor: 'yellow',
    flex: 1
  }
});