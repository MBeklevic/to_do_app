import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from './EditTodoForm';


function Todo({ task, key, completed, removeTodo, id, toggleTodo, editTodo }) {
    const [isEditing, toggleEditing] = useToggleState(false);
    return (
        <ListItem>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditing={toggleEditing} /> :
                <>
                    <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        <li key={key}>
                            {task}
                        </li>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Edit' onClick={toggleEditing} >
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }

        </ListItem>

    )
}

export default Todo;