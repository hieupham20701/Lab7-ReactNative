
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native';
export default function AddTasks() {
    const [task, setTask]= useState();
    const [nameTask, setNameTask] = useState();
    const addTask = (nameTask) =>{
        const tasks = {
            "name":nameTask,
            "createdAT":new Date()
        }
        fetch('https://633f9f8ae44b83bc73bdc814.mockapi.io/api/task/tasks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: tasks
});
    }
  return (
    <View style={[styles.rowLayout, styles.container]}>
        <TextInput
        style={styles.input}
        onChangeText={newTaskName => setNameTask(newTaskName)}
        value={nameTask}
        placeholder="Name Task"
        // keyboardType="numeric"
      />
          <TouchableOpacity
              style={[styles.loginScreenButton,{backgroundColor:"#0A5EB7"}]}
              onPress={() => addTask(nameTask)}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Add</Text>
          </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    rowLayout: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      input: {
        height: 70,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingRight:150
      },
      textContent:{
        marginTop:10, 
        marginLeft:180, 
        fontWeight:"bold"
      },
      loginScreenButton:{
        marginRight:5,
        marginLeft:10,
        marginTop:10,
        marginBottom:30,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      }, 
      loginText:{
        fontSize:15,
        color:'#fff',
        fontWeight:"bold",
        textAlign:'center',
        padding:30
    }
  });
