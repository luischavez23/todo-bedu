import { useState } from 'react';

import { TodoForm } from './components/Todo/TodoForm.jsx';
import { TodoList } from './components/Todo/TodoList.jsx';
import { Modal } from './components/Modal/Modal.jsx';


import './App.css';
import  { getDate } from './components/Date/date.js';

function App() {

  const [todos, setTodos] = useState([]);

  const completedTodo = todos.filter( todo => todo.select=='completed').length;
  
  const totalTodos = todos.length;

  const [currentDate, setCurrentDate] = useState(getDate());

  // Add new todo
  const addTodo = todo => {
    setTodos([...todos, todo])
  };

  //Remove an item todo
  const deleteTodo = id => {
    const newTodos = todos.filter( (todo) => todo.id !== id);
    setTodos(newTodos);
  };

  //Update todo
  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed }: todo))
  };

  const modal = true;

  return (
    <main className='container'>
      <div className='row'>
          <h1 className='header display-1 text-center my-3'>Todo List</h1>
          <div className='col-md-5'>
            <TodoForm addTodo={ addTodo }  />
          </div>
          <div className='col-md-7'>
            <TodoList todos={ todos } 
            deleteTodo={ deleteTodo } 
            completedTodo={ completedTodo } 
            totalTodos={ totalTodos } 
            currentDate={ currentDate } 
            updateTodo= { updateTodo }
            />
          </div>
      </div>
      {modal ? <Modal /> : null}
    </main>
  );
}

export default App;
