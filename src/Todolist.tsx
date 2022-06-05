import React, {useState} from 'react';

type filterValueType = 'All'|'Active'|'Completed';

type TodolistPropsType = {
    title: string | number;
    tasks: Array<TasksPropsType>;
    removeTask: (taskId:number)=>void;
    // changeFilter:(value:filterValueType)=>void;
}

type TasksPropsType = {
    id: number;
    title: string;
    isDone: boolean;
}

export const Todolist = (props: TodolistPropsType) => {

    const[filterValue, setFilterValue] = useState('All')

    const changeFilter = (value:filterValueType) => {
        setFilterValue(value)
    }

    let filteredTasks = props.tasks
    if(filterValue==='Active'){filteredTasks = props.tasks.filter(el => el.isDone === true)}
    if (filterValue==='Completed'){filteredTasks = props.tasks.filter(el => el.isDone === false) }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {filteredTasks.map((el, index) => {
                return (
                    <li key={el.id}>
                        <button onClick={() =>props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
            )
            })
            }
        </ul>
        <div>
            <button onClick={() =>changeFilter('All')}>All</button>
            <button onClick={() =>changeFilter('Active')}>Active</button>
            <button onClick={() =>changeFilter('Completed')}>Completed</button>
        </div>
    </div>
}