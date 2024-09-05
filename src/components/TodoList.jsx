import { TodoCounter } from './TodoCounter.jsx';
import { TodoItem } from './TodoItem.jsx';

export const TodoList = ({ todos, completedTodos, totalTodos }) => {
    return(
        <>
        <h3 className="header display-3">Lista de TODOs</h3>
        < TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <div className="container">
                { todos.map( todo => (
                    < TodoItem  key={ todo.id } title={ todo.title } description={ todo.description } select= { todo.select } priority={ todo.priority }/>
                )) }
        </div>
        </>
    );
 } 