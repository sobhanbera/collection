import React from 'react'
import style from '../../styles/components/radio/index.module.scss'
function index(props: React.HTMLProps<HTMLInputElement>) {
    const id = `radio${Math.random()}`
    return (
        <div className={style.container}>
            <input
                type="radio"
                name={props.name}
                id={props.id ? props.id : id}
            />
            <label htmlFor={props.id ? props.id : id}>{props.children}</label>
        </div>
    )
}

export default index
