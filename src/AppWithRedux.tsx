import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist1} from './Todolist1';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from './state/todolists-reducer';
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './state/tasks-reducer';
import {AppRootStateType} from './state/store';
import {useDispatch, useSelector} from 'react-redux';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
    // const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    function removeTask(id: string, todolistId: string) {
        let action = removeTaskAC(id, todolistId)
        dispatch(action)
    }

    function addTask(title: string, todolistId: string) {
        let action = addTaskAC(title, todolistId)
        dispatch(action)

    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let action = changeTaskStatusAC(id, isDone, todolistId)
        dispatch(action)
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        let action = changeTaskTitleAC(id, newTitle, todolistId)
        dispatch(action)
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        let action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }

    function removeTodolist(id: string) {
        let action = removeTodolistAC(id)
        dispatch(action)
    }

    function changeTodolistTitle(id: string, title: string) {
        let action = changeTodolistTitleAC(id, title)
        dispatch(action)
    }

    function addTodolist(title: string) {
        let action = addTodolistAC(title)
        dispatch(action)
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            // let allTodolistTasks = tasks[tl.id];
                            // let tasksForTodolist = allTodolistTasks;
                            //
                            // if (tl.filter === 'active') {
                            //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            // }
                            // if (tl.filter === 'completed') {
                            //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            // }
                            return <Grid item key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist1
                                        todolist={tl}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
