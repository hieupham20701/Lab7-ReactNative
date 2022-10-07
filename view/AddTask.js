import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity } from 'react-native';
// const [nameTask, setNameTask] = useState("");

export default class componentName extends Component {
  
  render() {
    const [task, setTask]= useState('');
    return (
      <View style={[styles.rowLayout, styles.container]}>
        <TextInput
        style={styles.input}
        onChangeText={setTask}
        value={task}
        placeholder="Name Task"
        // keyboardType="numeric"
      />
          <TouchableOpacity
              style={[styles.loginScreenButton,{backgroundColor:"#0A5EB7"}]}
              onPress={() => navigate('HomeScreen')}
              underlayColor='#fff'>
              <Text style={styles.loginText}>Add</Text>
          </TouchableOpacity>
      </View>
    );
  }
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