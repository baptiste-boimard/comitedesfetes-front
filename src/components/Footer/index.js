import { NavLink } from 'react-router-dom';


// ==--IMPORT COMPONENTS--==
// ==--IMPORT BOOTSTRAP--==
import Nav from 'react-bootstrap/Nav';
// ==--IMPORT IMAGE--==


// ==--IMPORT STYLE--==
import './style.scss'

function Footer() {
  return (

    // ==-- COMPONENT FOOTER --==
    <Nav defaultActiveKey="/home" as="ul" className="footer">

      <NavLink to="/faq">
        <Nav.Item as="li">
          <p>FAQ</p>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/legals">
        <Nav.Item as="li">
          <p>Mentions Légales</p>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/confidentiality">
        <Nav.Item as="li">
          <p>Politique de confidentialité</p>
        </Nav.Item>
      </NavLink>
       
      <NavLink className="menu-button" to="/plan">
        <Nav.Item as="li">
          <p>Plan du site</p>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/admin">
        <Nav.Item as="li">
          <p>Admin</p>
        </Nav.Item>
      </NavLink>

    </Nav>
  );
}

export default Footer;