import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";





const TodoApp = () => {
    const TODOS = JSON.parse(window.localStorage.getItem("todos")) || [];

    const [todos, setTodos] = useState(TODOS);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTask => {
        const newTodo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            task: newTask,
            completed: false
        }
        setTodos([...todos, newTodo])
    }
    const deleteTodo = id => {
        // filter out the removed todo
        const updatedTodos = todos.filter(todo => todo.id !== id);
        // setTodo
        setTodos(updatedTodos);
    }
    const toggleTodo = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo;
            }
        })
        setTodos(updatedTodos);
    }
    const editTodo = (id, newTask) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: newTask }
            } else {
                return todo;
            }
        })
        setTodos(updatedTodos)
    }
    return (
        <div >

            <div>
                <div>
                    <div>Todo list</div>
                </div>
            </div>
            <TodoForm addTodo={addTodo} editTodo={editTodo} />

            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    )
}

export default TodoApp;