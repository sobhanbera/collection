import React from 'react'
import style from '../../styles/components/codebox/index.module.scss'
import CheckBox from '../checkbox'
function Codebox(props: React.HTMLProps<HTMLDivElement>) {
    const code = React.useRef<HTMLDivElement>() //ref to the code
    const [check, setCheck] = React.useState(false)
    const copy = () => {
        navigator.clipboard.writeText(code.current.innerText)
    }
    return (
        <div className={style.container}>
            <div className={style.bar}>
                <div>CSS</div>
                <CheckBox
                    onClick={() => {
                        setCheck(prev => !prev)
                    }}>
                    Max compatibility(IE6+)
                </CheckBox>
            </div>
            <div className={style.editor}>
                {check ? (
                    <code ref={code}>
                        <span className={style.blue}>background</span> :
                        rgb(115,107,255);
                        <br />
                        <span className={style.blue}>background</span> :
                        -moz-radial-gradient(circle, rgba(115,107,255,1) 29%,
                        rgba(255,255,255,1) 69%, rgba(0,212,255,1) 100%);
                        <br />
                        <span className={style.blue}>background</span> :
                        -webkit-radial-gradient(circle, rgba(115,107,255,1) 29%,
                        rgba(255,255,255,1) 69%, rgba(0,212,255,1) 100%);
                        <br />
                        <span className={style.blue}>background</span> :
                        radial-gradient(circle, rgba(115,107,255,1) 29%,
                        rgba(255,255,255,1) 69%, rgba(0,212,255,1) 100%);
                        <br />
                        <span className={style.blue}>filter</span>
                        :progid:DXImageTransform.Microsoft.gradient(startColorstr="#736bff",endColorstr="#00d4ff",GradientType=1);
                    </code>
                ) : (
                    <code ref={code}>
                        <span className={style.blue}>background</span>:
                        rgb(142,135,255); background: radial-gradient(circle,
                        rgba(142,135,255,1) 35%, rgba(255,175,0,1) 69%);
                    </code>
                )}
            </div>
            <div onClick={copy} className={style.copy}>
                <span>Copy to clipboard</span>
            </div>
        </div>
    )
}

export default Codebox
