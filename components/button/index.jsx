import React from 'react';
import styles from '../../styles/components/button/index.module.css'
function Button({onClickFun,btnTitle}) {
    return <button className={styles.btn} onClick={onClickFun?onClickFun:null}><span class="text">{btnTitle}</span></button>;
}

export default Button;
