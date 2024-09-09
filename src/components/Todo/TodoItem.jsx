import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CurrentDate } from '../Date/CurrentDate.jsx';

import './TodoItem.css';

export const TodoItem = ({ todo, deleteTodo, currentDate, updateTodo }) => { 
    
    const {id, title, description, select, priority } = todo;

    return(
        <div className=" card todo-item">
            <FontAwesomeIcon icon={ faXmark } className='close' onClick={() => deleteTodo(id) }beat/>
            <div className='card-body'>
                <div className="d-lg-flex justify-content-between align-items-center" >
                    <div className='card-icons'>
                        <p className={`todo-title ${ select && "todo-title--completed" } fs-1 fw-bolder card-title`}>
                        <FontAwesomeIcon icon={select ? faCircleCheck : faCircle} 
                        className={select ? 'icon icon-check--active' : 'icon'} 
                        onClick={() => updateTodo(id)}/>
                            {title}
                        </p>
                    </div>
                    {priority && <span className="badge rounded-pill fs-6 card-priority">Prioridad</span>}
                </div>
                <p className={`mb-2 todo-desc ${select  && "todo-desc--completed"} fs-4`}>{ description }</p>
                { select && <CurrentDate currentDate= { currentDate }/> }    
            </div>
        </div>
    );
 }  