export const TodoCounter = ({totalTodos, completedTodo}) => {
    return(<h3 className="display-6 text-center">{totalTodos>0 ? `Se ha completado ${completedTodo} de ${totalTodos} TODO` :  "Agrega un nuevo TODO \u{1F9D0} "}</h3>);
}