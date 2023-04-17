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
          <Nav.Link href="/faq">FAQ</Nav.Link>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/legals">
        <Nav.Item as="li">
          <Nav.Link href="/legals">Mentions Légales</Nav.Link>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/confidentiality">
        <Nav.Item as="li">
          <Nav.Link href="/confidentiality">Politique de confidentialité</Nav.Link>
        </Nav.Item>
      </NavLink>
       
      <NavLink className="menu-button" to="/plan">
        <Nav.Item as="li">
          <Nav.Link href="/plan">Plan du site</Nav.Link>
        </Nav.Item>
      </NavLink>

      <NavLink className="menu-button" to="/admin">
        <Nav.Item as="li">
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav.Item>
      </NavLink>

    </Nav>
  );
}

export default Footer;