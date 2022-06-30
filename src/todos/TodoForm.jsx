import useInputState from "../hooks/useInputState";

const TodoForm = (props) => {
    const [task, handleTask, resetTask] = useInputState('');

    const handleClick = e => {
        e.preventDefault();
        props.addTodo(task);
        resetTask();
    }
    return (
        <div>
            <form>
                <input type='text' name='task' value={task} onChange={handleTask} />
                <button onClick={handleClick}>Add</button>
            </form>

        </div>
    )
}

export default TodoForm;