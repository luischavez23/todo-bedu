import './Modal.css';

import{ Error } from './Error.jsx';
import{ Success } from './Success.jsx';


export const Modal = ({ modalType }) => {
    const renderModal = () => {
        switch(modalType){
            case 'success':
                return(
                    <>
                        <Success />
                        <h2 className='text-center'>Agregado correctamente</h2>
                    </>
                );
            case 'error':
                return (
                      <>
                        <Error />
                        <h2 className='text-center mt-4'>Favor de llenar el formulario.</h2>
                      </>
                );
        }
    }
    return(
        <div className="show-modal">
            <div className="show-modal-content">
                {renderModal()}
            </div>
        </div>
    );
}