import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
        },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todoId !== todo.id);
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const toggledTodo = todos.map(todo =>
                todo.id == todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(toggledTodo);
        },
        editTodo: (todoId, newTask) => {
            const editingTodo = todos.map(todo =>
                todo.id == todoId ? { ...todo, task: newTask } : todo
            )
            setTodos(editingTodo);
        }
    };
};
