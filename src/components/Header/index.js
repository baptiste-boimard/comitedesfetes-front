// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import banner from '../../docs/images/banner.png'
import logo from '../../docs/images/logo.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Header() {
  return (
    <div className="header">

    {/* ==--COMPONENT IMAGE--== */}
    <img src={logo} className="header-logo" alt="logo" />
    {/* ==--COMPONENT IMAGE--== */}

    {/* ==--COMPONENT CARD--== */}
      <Card /*style={{ border: 'none' }}*/ className="header-card">
        <Card.Img variant="top" src={banner} className="header-card--image"/>
        <Card.Body className="header-card--body">
          <Card.Title></Card.Title>
          <Card.Text className="header-card--text">
            Le comité des Fêtes de Thénouville
          </Card.Text>
        </Card.Body>
      </Card>
    {/* ==--COMPONENT CARD--== */}

    </div>
  );
}

export default Header;