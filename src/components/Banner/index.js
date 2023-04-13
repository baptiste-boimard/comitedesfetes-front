// ==IMPORT COMPONENTS==
// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import banner from '../../docs/images/banner.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Banner() {
  return (
    // ==--COMPONENT CARD--==
    <>
      <Card /*style={{ border: 'none' }}*/ className="card">
        <Card.Img variant="top" src={banner} className="card-image"/>
        <Card.Body className="card-body">
          <Card.Title></Card.Title>
          <Card.Text className="card-text">
            Le comité des Fêtes de Thénouville
          </Card.Text>
        </Card.Body>
    </Card>
    </>
  // ==--COMPONENT CARD--==
  );
}

export default Banner;