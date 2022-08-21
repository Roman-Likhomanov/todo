import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e7ad35f3-1018-43ff-8616-df879477bca0'
    }
})

export const todoApi = {
    getTodos() {
        return instance.get<TodoType[]>('todo-lists')

    },
    createTodo(title: string) {
       return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}

export type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type CommonResponseType<T={}> = {
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
    data: T
}

export type DeleteUpdateTodoResponseType = {
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
    data: {}
}
