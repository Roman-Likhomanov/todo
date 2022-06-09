import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const allChangeFilterHandler = () => {
        props.changeFilter('all')
    }

    const activeChangeFilterHandler = () => {
        props.changeFilter('active')
    }

    const completedChangeFilterHandler = () => {
        props.changeFilter('completed')
    }

    const tsarChangeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (value:string) => {
        props.removeTask(value)
    }
    
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={()=>removeTaskHandler(t.id)}>x</button>
                </li>)
            }
        </ul>
        <div>
            <Button name={'all'} callBack={()=>tsarChangeFilterHandler('all')}/>
            <Button name={'active'} callBack={()=>tsarChangeFilterHandler('active')}/>
            <Button name={'completed'} callBack={()=>tsarChangeFilterHandler('completed')}/>
        </div>
    </div>
}
