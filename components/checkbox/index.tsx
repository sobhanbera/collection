import React from 'react'
import style from '../../styles/components/checkbox/index.module.scss'
function CheckBox(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <label className={style.container}>
            {props.children}
            <input type="checkbox" name={props.name} id={props.id} />
            <span className={style.checkmark}></span>
        </label>
    )
}

export default CheckBox
