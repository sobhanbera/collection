import React, {useEffect, useRef, useState} from 'react'
import style from '../../styles/components/slider/index.module.scss'

interface SliderProps extends React.HTMLProps<HTMLInputElement> {
    max: number
}

function Slider(props: SliderProps) {
    const slideValue = useRef<HTMLDivElement>()
    const inputSlider = useRef<HTMLInputElement>()
    const [tag, setTag] = useState(false)

    const changed = evt => {
        slideValue.current.textContent = evt.target.value
        setTag(true)
    }

    const reset = () => {
        setTag(false)
    }

    return (
        <div className={style.range}>
            <div className={style.sliderValue}>
                <div className={tag ? style.show : null} ref={slideValue}>
                    100
                </div>
            </div>
            <div className={style.field}>
                <div className={`${style.value} ${style.left}`}>
                    {props.min ? props.min : 0}
                </div>
                <input
                    onChange={changed}
                    onBlur={reset}
                    ref={inputSlider}
                    type="range"
                    min={props.min ? props.min : 0}
                    max={props.max ? props.max : 100}
                />
                <div className={`${style.value} ${style.right}`}>
                    {props.max ? props.max : 100}
                </div>
            </div>
        </div>
    )
}

export default Slider
