import styles from '../../styles/components/button/index.module.scss'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    content: string
}
export default function Button(props: ButtonProps) {
    return (
        <button className={styles.button} {...props}>
            {props.children || props.content}
        </button>
    )
}
