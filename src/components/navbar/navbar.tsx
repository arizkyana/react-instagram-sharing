import { Link } from 'react-router-dom';
import { NavbarStyled } from './navbar.styled';

import CartContext, { IContextValues } from '../cart/cart.context';

function Navbar() {
  return (
    <CartContext.Consumer>
      {(value: IContextValues) => (
        <NavbarStyled>
          <ul>
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/tickets/abc-def">Detail Tickets</Link>
            </li> */}
            <li>
              <div>
                Cart {value.carts.length}
              </div>
            </li>
          </ul>
        </NavbarStyled>
      )}
    </CartContext.Consumer>
  )
}

export default Navbar;
