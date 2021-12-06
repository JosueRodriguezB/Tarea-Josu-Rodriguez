import { Carro } from '../Carro'
import { Nav } from './styles'

export const Navbar = ({ cantidad }) => {
    return (
        <Nav>
            <p>Logo</p>
            <Carro cantidad={cantidad} />
        </Nav>
    )
}