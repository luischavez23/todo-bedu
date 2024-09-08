import './CurrentDate.css';

export const CurrentDate = ( { currentDate }) => {
    return(
        <p className="card-date"> Completado: { currentDate } </p>
    );
}