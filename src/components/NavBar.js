import './NavBar.scss';

import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // iconos solidos

const NavBar = () => {
	return (
		<nav>
			<div className="links">
				<div className="logo">
					<FontAwesomeIcon icon={faAlignLeft} />
				</div>
				<NavLink name="HOME" />
				<NavLink name="SHOP" />
				<NavLink name="MAGAZINE" />
			</div>
			<div className="actions">
				<FontAwesomeIcon icon={faShoppingCart} />
				<NavLink name="LOGIN" />
			</div>
		</nav>
	);
};

export default NavBar;
