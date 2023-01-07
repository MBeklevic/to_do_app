import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <>
                            <Todo
                                // task={todo.task}
                                // id={todo.id}
                                // completed={todo.completed}
                                {...todo}
                                key={todo.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {idx < todos.length - 1 && <Divider />}

                        </>
                    ))}
                </List>

            </Paper>
        )
    return null;
}

export default TodoList;
