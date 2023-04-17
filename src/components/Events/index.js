// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
import Articles from '../Articles';

// ==--IMPORT STYLE--==
import './style.scss'

function Events() {
  return (

    //==-- COMPONENT EVENTS --==
    <Card className="events">
    <Card.Title className="events-title" >Evènements</Card.Title>
    
    <Articles />

    </Card>
    //==-- COMPONENT EVENTS --==

  );
}

export default Events;