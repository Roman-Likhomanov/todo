import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import styles from './Todolist.module.css'
import {CheckBox} from './components/CheckBox';

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
    addTask: (title: string) => void
    changeCheckBox: (taskID: string, value: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const[error, setError] = useState<null|string>(null)
    let [title, setTitle] = useState('')

    const addTask = () => {
        if(title.trim()!=='') {
            props.addTask(title.trim());
            setTitle('');
        } else {setError('Title is required')}
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    const changeCheckBoxHandler = (taskID: string, eValue: boolean) => {
        props.changeCheckBox(taskID, eValue)
    }

    const onClickHandler = (tID:string) => props.removeTask(tID)

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? styles.error : ''} value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return <li className={t.isDone ? styles.isDone : ''} key={t.id}>
                        <CheckBox checked={t.isDone} callback={(eValue)=>changeCheckBoxHandler(t.id, eValue)}/>
                        <span>{t.title}</span>
                        <button onClick={()=>onClickHandler(t.id)}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? styles.activeFilter : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? styles.activeFilter : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? styles.activeFilter : ''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
