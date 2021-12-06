import { BubbleNumber } from './styles'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <BubbleNumber>
            {cantidad > 9 ? '9+' : cantidad}
        </BubbleNumber>
    )   
}