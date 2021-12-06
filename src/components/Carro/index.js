import { useState } from 'react'
import { useProductos } from '../../context/productos'
import { Burbuja } from '../Burbuja'
import styles from './estilos'
import { ArticleList, Cart, Container, DeleteButton, List, ListItem } from './styles'

export const Carro = ({ cantidad }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)
    const {productos, removerProducto} = useProductos()
    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    const handleDelete = (x) => {
        removerProducto(x)
    }

    return (
        <Container style={styles.carroContenedor}>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Cart onClick={handleMostrarCarro} style={styles.carro}>
                Carro
            </Cart>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ArticleList style={styles.listaArticulos}>
                        <List>
                            {
                                productos.map(x => {
                                    return (
                                        <ListItem key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><DeleteButton onClick={() => handleDelete(x)}>X</DeleteButton> {x.nombre}</span>
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </ListItem>
                                    )
                                })
                            }
                            <ListItem>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </ListItem>
                            <ListItem>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </ListItem>
                            <ListItem>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </ListItem>
                        </List>
                    </ArticleList>
            }
        </Container>

    )
}