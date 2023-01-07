import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoForm from './TodoForm';


function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);


    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    // A custom Hook is created for Todo actions below: 


    // const [todos, setTodos] = useState(initialTodos);

    // const addTodo = newTodoText => {
    //     setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    // }
    // const removeTodo = todoId => {
    //     const updatedTodos = todos.filter(todo => todoId !== todo.id);
    //     setTodos(updatedTodos);
    // }
    // const toggleTodo = todoId => {
    //     const toggledTodo = todos.map(todo =>
    //         todo.id == todoId ? { ...todo, completed: !todo.completed } : todo
    //     );
    //     setTodos(toggledTodo);
    // }
    // const editTodo = (todoId, newTask) => {
    //     const editingTodo = todos.map(todo =>
    //         todo.id == todoId ? { ...todo, task: newTask } : todo
    //     )
    //     setTodos(editingTodo);
    // }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color='primary' position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={"center"} marginTop={"1rem"}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;
