import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ title, description, select, priority }) => { 
    return(
        <div className=" card todo-item">
            <FontAwesomeIcon icon={ faXmark } beat className='close'/>
            <div className='card-body'>
                <div className="d-flex justify-content-between align-items-center" >
                    <div className='card-icons'>
                        <p className={`todo-title ${ select=='completed' && "todo-title--completed" } fs-1 fw-bolder`}>
                        {select=='completed' ? <FontAwesomeIcon icon={faCircleCheck} className='icon icon-check--active' /> : <FontAwesomeIcon icon={ faCircle } className="icon" />   }
                            {title}
                        </p>
                    </div>
                    {priority && <span className="badge bg-primary rounded-pill">Prioridad</span>}
                </div>
                <p className={`mb-2 todo-desc ${select == 'completed' && "todo-desc--completed"}`}>{ description }</p>
            </div>
        </div>
    );
 }  