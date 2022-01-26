import styles from '../../styles/components/input/index.module.scss'

export default function Input(props: React.HTMLProps<HTMLInputElement>) {
    return <input className={styles.input} {...props} />
}
