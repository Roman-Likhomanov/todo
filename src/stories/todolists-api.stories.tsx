import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todoApi} from '../api/todo-api';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'e7ad35f3-1018-43ff-8616-df879477bca0'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoApi.getTodos()
            .then((res) => {
                setState(res.data);
            })

        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       const title = "newTodolist"
        todoApi.createTodo(title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '42b70dee-ad05-415c-ac80-f02b5d74e2c5'
    useEffect(() => {
        todoApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'fce02b23-fa61-4ff1-aa58-30248293df48'
    const title = 'React-----'
    useEffect(() => {
        todoApi.updateTodoTitle(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}