import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';

import './TodoList.css';

export const TodoList = ({ todos, completedTodo, totalTodos, deleteTodo, currentDate, updateTodo }) => {
    return(
        <>
        < TodoCounter completedTodo={completedTodo} totalTodos={totalTodos} />
        <div className="container">
            <div className="listContainer">
                { todos.map( todo => (
                    < TodoItem  key={ todo.id } 
                    todo={ todo}
                    deleteTodo={ deleteTodo }
                    currentDate={ currentDate }
                    updateTodo={ updateTodo }
                    />
                ))}
            </div>
        </div>
        </>
    );
 } 