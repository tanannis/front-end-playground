// import { Fragment } from "react";
/* https://www.geeksforgeeks.org/why-are-fragments-better-than-container-divs/
    
If need to add attributes, use <Fragment><Fragment/>
else use short syntax of Fragment: <></>
*/
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// React allows us to import the log as a React component
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"

import { CartContext } from "../../context/cart.context"

import "./navigation.styles.scss"

const Navigation = () => {
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<div className="navigation">

      {/* When user clicks Logo, it links to the home page. */}
       <Link className="logo-container" to="/">
				<CrownLogo className="logo"/>
       </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
						SIGN IN

					<CartIcon/>
        </div>
				{isCartOpen && <CartDropdown />}

			</div>

			{/* Outlet represents other pages and will sit below the nav bar*/}
			<Outlet /> 

		</>
	)
}

export default Navigation;