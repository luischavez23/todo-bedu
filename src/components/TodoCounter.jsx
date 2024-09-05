export const TodoCounter = ({totalTodos, completedTodos}) => {
    return(<h3 className="display-6 text-center my-5">{totalTodos>0 ? `Se ha completado ${completedTodos} de ${totalTodos} TODO` :  "Agrega un nuevo TODO \u{1F60A} "}</h3>);
}