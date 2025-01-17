import { useState, useRef } from 'react';

import './TodoForm.css';

export const TodoForm = ({ addTodo, openModal }) => {
    
    const titleRef = useRef(null);
    const descRef = useRef(null);

    const [ todo, setTodo ] = useState({
        title: '',
        description: '',
        select: 'pending',
        priority: false
        });
    
    const {title, description, select, priority } = todo;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim()){
            titleRef.current.focus();
            return openModal('error');
        }
        if(!description.trim()){
            descRef.current.focus();
            return openModal('error');
        }
        
        addTodo({
            id: Date.now(),
            ...todo,
            select: select === 'completed',
        });
        
        openModal('success');

        setTodo({
            title: '',
            description: '',
            select: 'pending',
            priority: false
        });
    }


    const handleChange = ({ target }) => {
        const { name, type, checked ,value } = target;

        setTodo(( prev ) => ({
            ...prev,
            [name]: type === 'checkbox'? checked : value,
        }));
    }
  

    
    return(
        <>
        <form className="form container mb-4" onSubmit = { handleSubmit }>
            <div className="form-outline mb-4">
                <input type="text" id="title" name="title"  value={ title } className="form-control p-2" onChange={ handleChange } ref={ titleRef } />
                <label className="form-label">Actividad</label>
            </div>
            <div className="form-outline mb-4">
                <textarea className="form-control" id="description" name="description" value={ description } onChange={ handleChange } ref={ descRef }></textarea>
                <label className="form-label" >Descripción</label>
            </div>
            <div className="mb-3">
                <select className="form-select form-select-md select p-2" name="select" id="select" value={ select } onChange={ handleChange } >
                    <option value="default" disabled>---Elige la opción---</option>
                    <option value="pending">Pendiente</option>
                    <option value="completed">Completado</option>
                </select>
                <label className="form-label" >Estatus</label>
            </div>
            <div className="form-check d-flex mb-4">
                <input className="form-check-input me-2 p-2" type="checkbox" id="priority" name="priority" checked={ priority } onChange = { handleChange }/>
                <label className="form-check-label" htmlFor="priority" >Prioridad</label>
            </div>
            
            <button type="submit" className="button" onClick = { handleSubmit } >Agregar</button>
        </form>
        </>
    );
 }