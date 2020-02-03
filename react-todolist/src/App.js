import React, { useState } from 'react';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [data, setData] = useState([]);
  const [input, getValueInput] = useState("");


  const onAddTask = () => {
    const inputValue = {
      value: input,
      isCompleted: false
    }
    if (inputValue.value){
      setData([...data, inputValue]);
    }else{
      alert('Enter you task')
    }
    
    getValueInput('');
    console.log(inputValue)
  }

  const onDeleteButton = (indexId) => {

    setData(data.filter((el, index) => (index !== indexId)));

  }

  const onCompleteButton = (indexId) => {

    const newInputValue = data.map((el, index) => {
      if (index !== indexId) {
        return el;
      } else {
        return {
          ...el,
          isCompleted: !el.isCompleted
        }
      }
    }

    )
    setData(newInputValue);

  }

  console.log(input);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Form value={input} onChange={getValueInput} onClick={onAddTask}></Form>
      <Route path='/all' render={() => data.map((inputValue, index) => <TodoItem indexId={index} onComplete={onCompleteButton} completed={inputValue.isCompleted} onClick={onDeleteButton}>{inputValue.value}</TodoItem>)}></Route>
      <Route path='/completed' render={() => data.map((inputValue, index) =>(inputValue.isCompleted) ? (<TodoItem indexId={index} onComplete={onCompleteButton} completed={inputValue.isCompleted} onClick={onDeleteButton}>{inputValue.value}</TodoItem>) : "")}></Route>
      <Route path='/uncompleted' render={() => data.map((inputValue, index) =>(inputValue.isCompleted === false) ? (<TodoItem indexId={index} onComplete={onCompleteButton} completed={inputValue.isCompleted} onClick={onDeleteButton}>{inputValue.value}</TodoItem>) : "")}></Route>
     
    </BrowserRouter>
  );
}

export default App;
