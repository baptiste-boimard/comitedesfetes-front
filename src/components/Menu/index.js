import { NavLink } from 'react-router-dom';


// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';

// ==--IMPORT STYLE--==
import './style.scss'

function Menu() {
  return (

    <div className="menu">
    {/* ==--COMPONENT MENU--== */}
      <NavLink className="menu-button" to="/team">
        <Button variant="outline-primary">L'équipe</Button>{' '}
      </NavLink>

      <NavLink className="menu-button" to="/contact">
        <Button variant="outline-secondary">Contact</Button>{' '}
      </NavLink>

      <NavLink className="menu-button" to="/team">
        <Button variant="outline-success">Evènements</Button>{' '}
      </NavLink>

      <NavLink className="menu-button" to="/team">
        <Button variant="outline-warning">Archives</Button>{' '}
      </NavLink>

      <NavLink className="menu-button" to="/team">
        <Button variant="outline-danger">Autre</Button>{' '}
      </NavLink>
      {/* ==--COMPONENT MENU--== */}
    </div>
    

  );
}

export default Menu;