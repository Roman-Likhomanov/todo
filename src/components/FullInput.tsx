import React, {useState} from 'react';

type FullInputPropsType = {
    callBack: (newTitle:string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    const [newTitle, setNewTitle] = useState('')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.callBack(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    return (
        <div>
        <input value={newTitle} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
        <button onClick={addTaskHandler}>+</button>
        </div>
    )
}