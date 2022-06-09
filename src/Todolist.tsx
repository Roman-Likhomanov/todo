import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';

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

    const tsarChangeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (value:string) => {
        props.removeTask(value)
    }

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }
    
    return <div>
        <h3>{props.title}</h3>
        {/*<FullInput callBack={props.addTask}/>*/}
        <Input newTitle={newTitle} setNewTitle={setNewTitle} callBack={addTaskHandler}/>
        <Button name={'+'} callBack={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <Button name={'x'} callBack={()=>removeTaskHandler(t.id)}/>
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
