// ==--IMPORT COMPONENTS--==
// ==--IMPORT BOOTSTRAP--==
import Nav from 'react-bootstrap/Nav';
// ==--IMPORT IMAGE--==


// ==--IMPORT STYLE--==
import './style.scss'

function Footer() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="footer">
      <Nav.Item as="li">
        <Nav.Link href="/home">FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Mentions Légales</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Politique de confidentialité</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3">Plan du site</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;