import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    let [tasks1, setTask1] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'TSX', isDone: true},
        {id: 4, title: 'ReactJS', isDone: false}
    ]);

    const removeTask = (taskId: number) => {
        tasks1 = tasks1.filter((el) => el.id !== taskId);
        setTask1(tasks1);
    }

    // const[filterValue, setFilterValue] = useState('All')
    //
    // const changeFilter = (value:filterValueType) => {
    //     setFilterValue(value)
    // }
    //
    // let filteredTasks = tasks1
    // if(filterValue==='Active'){filteredTasks = tasks1.filter(el => el.isDone === true)}
    // if (filterValue==='Completed'){filteredTasks = tasks1.filter(el => el.isDone === false) }


    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasks1}
                removeTask={removeTask}
                // changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
