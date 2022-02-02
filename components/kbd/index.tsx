import React from 'react'
import style from '../../styles/components/kbd/index.module.scss'
import {kbd} from '../../pages/api/kbd'
function Kbd(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div className={style.container}>
            <div className={style.kbd}>
                <div className={style.heading}>Description</div>
                <div className={style.heading}>windows</div>
                <div className={style.heading}>Mac</div>
                {kbd.map((e, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div>{e.description}</div>
                            <div>{e.windows}</div>
                            <div>{e.mac}</div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Kbd
