import { useState } from 'react';

import { TodoForm } from './components/TodoForm.jsx';
import { TodoList } from './components/TodoList.jsx';


import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  const completedTodos = todos.filter( todo => todo.select=='completed').length;
  
  const totalTodos = todos.length;

  const addTodo = todo => {
    setTodos([...todos, todo])
  };


  return (
    <>
      <TodoForm addTodo={ addTodo } />
      <TodoList todos={ todos }  completedTodos={ completedTodos } totalTodos={ totalTodos } />
    </>
  );
}

export default App;
