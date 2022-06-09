import React, {useState} from 'react';

type InputPropsType = {
    newTitle: string
    setNewTitle: (newTitle: string)=>void
    callBack:()=>void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.callBack()
        }
    }

    return (
            <input value={props.newTitle} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
    )
}