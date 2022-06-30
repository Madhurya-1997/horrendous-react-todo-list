import React from 'react'
import useInputState from '../hooks/useInputState'

const EditTodoForm = ({ currentTodo, editTodo, toggleEditForm }) => {
    const [editedTask, setEditedTask, resetEditedTask] = useInputState(currentTodo.task);
    const handleEdit = e => {
        e.preventDefault();
        editTodo(currentTodo.id, editedTask)
        resetEditedTask();
        toggleEditForm();
    }
    return (
        <div>
            <form>
                <input type='text' name='task' value={editedTask} onChange={setEditedTask} />
                <button onClick={handleEdit}>Edit</button>
            </form>

        </div>
    )
}

export default EditTodoForm