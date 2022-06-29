import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    callBack:(newTitle:string)=>void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const addTask = () => {
        if (newTitle !== "") {
            props.callBack(newTitle);
        }
    }

    const changeEditHandler = () => {
        setEdit(!edit)
        addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input onChange={onChangeHandler} autoFocus onBlur={changeEditHandler} value={newTitle}/>
            : <span onDoubleClick={changeEditHandler}>{newTitle}</span>
    );
};
