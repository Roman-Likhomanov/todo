import React, {ChangeEvent} from 'react';

type CheckBoxPropsType = {
    checked: boolean
    callback: (eventValue:boolean)=>void
}

export const CheckBox = (props: CheckBoxPropsType) => {
const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.checked)
}
    return (
        <input type="checkbox" checked={props.checked} onChange={onChangeHandler}/>
    )
}