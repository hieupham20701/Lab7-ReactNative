import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image,TouchableOpacity,SafeAreaView, StatusBar, FlatList } from 'react-native';

export default function ListTask() {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        TaskGet();
    },[tasks]);

    const TaskGet = ()=>{
        fetch('https://633f9f8ae44b83bc73bdc814.mockapi.io/api/task/tasks')
        .then((res) => res.json())
        .then((result) => {
            setTasks(result);
        });
    }
    const Item = ({ item, onPress, backgroundColor, textColor})=>(
        <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor:'powderblue', justifyContent:'center'}]}>
          <View style={styles.rowLayout}>
            
            <View style={{flexDirection: "column", flexWrap:"wrap"}}>
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.title, textColor]}>{item.name}</Text>
      
              </View>
              <Text style={[styles.shop, textColor]}>{item.createdAT}</Text>
            </View>
            <TouchableOpacity
                    style={[styles.deleteBtn]}
                    // onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                    <Text style={[styles.textBtn]}>Delete</Text>
            </TouchableOpacity>
          </View>
      
        </TouchableOpacity>
      )
      const renderItem = ({ item }) => (
        <Item item={item} />
      );
  return (
    <SafeAreaView style={styles.container}>
            <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent:'center'
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      paddingRight:50
    },
    title: {
      fontSize: 18,
      marginLeft:10,
      // paddingRight:10,
    //   flex:1,
    //   flexWrap:'wrap'
      // marginRight:
    },
    shop:{
      fontSize: 15,
      margin:10,
    },
    rowLayout:{
      flexDirection: "row", 
      flexWrap:"wrap",
      marginRight:100
    },
    img:{
        
    },
    deleteBtn:{
      backgroundColor:"red",
      // padding:10
      position: 'absolute',
      left:250,
      borderRadius:10
    },
    textBtn:{
      fontSize:15,
      color:'#fff',
      fontWeight:"bold",
      textAlign:'center',
      padding:20
    }
  });

