import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { TodoForm } from './components/Todo/TodoForm.jsx';
import { TodoList } from './components/Todo/TodoList.jsx';
import { Modal } from './components/Modal/Modal.jsx';


import './App.css';
import  { getDate } from './components/Date/date.js';

//Initial localStorage
const todoArray = JSON.parse(localStorage.getItem('todos'))|| [];

function App() {
  
  // useStates
  const [todos, setTodos] = useState(todoArray);
  const [currentDate, setCurrentDate] = useState(getDate());
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState(null);

  //Todo Counter
  const completedTodo = todos.filter( todo => todo.select).length;
  const totalTodos = todos.length;
   
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
    const newUpdate = todos.map((todo) =>{
      if(todo.id === id){
        todo.select =! todo.select; 
      } return todo});

      setTodos(newUpdate);
      setCurrentDate(getDate())
    };

    //Order priority
    const orderTodo = (newOrder => {
      return newOrder.sort((a,b) => {
        if(a.priority === b.priority) return 0;
        if(a.priority)return -1;
        if(!a.priority)return 1;
      });
    })
    
    //localStorage  useEffect
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    
    //Hidden the modal
    useEffect(() => {
      if(showModal){
        const timer  = setTimeout(() => {
          setShowModal(false);
        }, 3000);
        return () => clearTimeout(timer);
        }
      }, [showModal]);
      
      //openModal with content
      const openModal = (modalType) => {
        setModalType(modalType);
        setShowModal(true);
      }
  
    return (
    <main className='container'>
      <div className='row'>
          <h1 className='header display-1 text-center my-3'>Todo List</h1>
          <section className='d-md-flex justify-content-center align-items-center gap-5'>
            <div className='col-md-5'>
              <TodoForm addTodo={ addTodo }
              showModal={ showModal }
              setShowModal={ setShowModal }
              openModal={ openModal }
              />
            </div>
            <div className='col-md-7'>
              <TodoList todos={ orderTodo(todos) } 
              deleteTodo={ deleteTodo } 
              completedTodo={ completedTodo } 
              totalTodos={ totalTodos } 
              currentDate={ currentDate } 
              updateTodo= { updateTodo }
              />
            </div>
          </section>
      </div>
      {showModal ? createPortal(< Modal modalType={ modalType }/>, document.getElementById('modal-root') ): null} 
    </main>
  );
}

export default App;
