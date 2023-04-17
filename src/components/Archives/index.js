// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
import Articles from '../Articles';

// ==--IMPORT STYLE--==
import './style.scss'

function Archives() {
  return (

    //==-- COMPONENT ARTICLES --==
    <Card className="archives">
    <Card.Title className="events-title" >Archives</Card.Title>
    
    <Articles />

    </Card>
    //==-- COMPONENT ARTICLES --==

  );
}

export default Archives;