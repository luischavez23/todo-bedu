import { useState } from 'react';

import './TodoForm.css';

export const TodoForm = ({ addTodo }) => {
    
    const [ todo, setTodo ] = useState({
        title: '',
        description: '',
        select: 'pending',
        priority: false
        });
    
    const {title, description, select, priority } = todo;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()){ 
            return console.log('Completar todos los campos!')
        };
        addTodo({
            id: Date.now(),
            ...todo,
        });

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
        <h1 className='header display-1'>Formulario TODO</h1>
            <form className="form container" onSubmit = { handleSubmit }>
                <div className="form-outline mb-4">
                    <input type="text" id="title" name="title"  value={ title } className="form-control p-2" onChange={ handleChange } />
                    <label className="form-label">Actividad</label>
                </div>
                <div className="form-outline mb-4">
                    <textarea className="form-control" id="description" name="description" value={ description } onChange={ handleChange }></textarea>
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