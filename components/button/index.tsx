import styles from '../../styles/components/button/index.module.scss'

export default function Button(
    props: React.HtmlHTMLAttributes<HTMLButtonElement>,
) {
    return (
        <button className={styles.btn} {...props}>
            {props.children}
        </button>
    )
}
