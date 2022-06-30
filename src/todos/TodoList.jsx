import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            deleteTodo={deleteTodo}
                            toggleTodo={toggleTodo}
                            key={todo.id}
                            todo={todo}
                            editTodo={editTodo}
                        />
                        //  id={todo.id}
                        // task={todo.task}
                        // completed={todo.completed}
                    )
                })}
            </ul>

        </div>
    )
}

export default TodoList;