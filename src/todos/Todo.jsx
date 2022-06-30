import React from "react";
import useToggle from "../hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import "./Todo.css";

const Todo = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
    const [isEditing, toggleIsEditing] = useToggle();

    const handleDelete = () => deleteTodo(todo.id);
    const handleEdit = () => toggleIsEditing();
    const handleChange = () => { toggleTodo(todo.id) }

    return (
        <div className="todo-container">
            {isEditing ? <EditTodoForm editTodo={editTodo} currentTodo={todo} toggleEditForm={toggleIsEditing} /> : (
                <li className="todo-item">
                    <div className="todo">
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            value={todo.completed}
                            onChange={handleChange} />
                        <div className={todo.completed ? "todo-task" : ""}>{todo.task}</div>
                    </div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>

                </li>
            )}

        </div>
    )
}

export default Todo;