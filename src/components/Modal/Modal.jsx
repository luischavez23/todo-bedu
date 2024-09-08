import './Modal.css';

import{ Success } from './Success.jsx'

export const Modal = () => {
    return(
        <div className="show-modal">
            <div className="show-modal-content">
                < Success />
                <h2 className='text-center'>Agregado correctamente</h2>
            </div>
        </div>
    );
}