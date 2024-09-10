export const TodoCounter = ({totalTodos, completedTodo}) => {
    return(<h3 className="text-center my-3">{totalTodos>0 ? `Se ha completado ${completedTodo} de ${totalTodos} TODO` :  "Agrega un nuevo TODO \u{1F9D0} "}</h3>);
}