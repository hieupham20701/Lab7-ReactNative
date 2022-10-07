import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Task from './components/Task';
import AddTasks from './view/AddTasks';
import ListTask from './view/ListTask'
export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={{flex:1, marginTop:100, marginLeft:20}}>
        <AddTasks/>
        <ListTask/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'c',
    justifyContent: 'center',
    flexDirection:'column'
  },
});
