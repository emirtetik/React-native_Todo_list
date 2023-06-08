import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import Counter from './components/Counter/Counter';
import SaveTodo from './components/SaveTodo/SaveTodo';
import TodoCard from './components/TodoCard/TodoCard';

function App (){

  const [counter,setCounter]=useState(0);

  const [list,setList]=useState([]);

  const [mydata,setMydata] = useState("")

    function UpdateCounter (){
      setCounter(counter+1);
      const value = 
        {
          id:counter,
          title:mydata,
          isDeleted:false
        }
      setList([...list,value])
    }
   
  return (
    <View style={styles.container}>
      <Counter setCounter={counter}/>
      <FlatList 
        keyExtractor={item =>item.id}
        data={list}
        renderItem={item => <TodoCard setTodo={item}/>}
        
      />
      <SaveTodo setUpdate={UpdateCounter} text={mydata} settext={setMydata}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#102027',
  },
});
export default App;