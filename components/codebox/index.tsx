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
                    }}
                >
                    Max compatibility(IE6+)
                </CheckBox>
            </div>
            <div onClick={copy} className={style.copy}>
                <span>Copy to clipboard</span>
            </div>
        </div>
    )
}

export default Codebox
