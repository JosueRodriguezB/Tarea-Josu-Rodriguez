import { useRef } from 'react'
import styles from './estilos'
import { CartButton } from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    const el = useRef(null)
    const onClickHandler = () => {
        agregarAlCarro(prod)
        el.current.focus()
    }
    return (
        <CartButton ref={el} onClick={onClickHandler} style={styles.button}>{children}</CartButton>
    )
}
