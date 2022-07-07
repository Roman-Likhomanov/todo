import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from '@mui/material';


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField id="outlined-basic"
                   label={error}
                   variant="outlined"
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   size='small'
                   error={!!error}
        />
        <Button onClick={addItem} variant="contained"
                style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}>+</Button>
        {/*<IconButton aria-label="delete">*/}
        {/*    <AddBox onClick={addItem}/>*/}
        {/*</IconButton>*/}
    </div>
}
