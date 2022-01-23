import styles from '../../styles/components/input/index.module.scss'
function Input({type,placeholder,name}) {
    return <input className={styles.input} type={type} placeholder={placeholder} name={name}/>;
}
export default Input;
