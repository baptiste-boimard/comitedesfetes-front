// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import info from '../../docs/images/info.png'

// ==--IMPORT STYLE--==
import './style.scss'

function InfoFrist() {
  return (
    // ==--COMPONENT INFOFIRST--==
    <Card className='infoFirst'>
      <Card.Img variant="top" src={info} className="infoFirst-image"/>
      <Card.Body>
        <Card.Title>Info Spéciale</Card.Title>
        <Card.Text>
          Il parait qu'il fait bon vivre à Theillement
        </Card.Text>
        <Button variant="primary">Lire l'article</Button>
      </Card.Body>
    </Card>
    // ==--COMPONENT INFOFIRST--==
  );
}

export default InfoFrist;