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
                        <h3 className='text-center'>Agregado correctamente</h3>
                    </>
                );
            case 'error':
                return (
                      <>
                        <Error />
                        <h3 className='text-center mt-4'>Favor de llenar el formulario.</h3>
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