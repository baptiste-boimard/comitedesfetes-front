// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
// ==--IMPORT STYLE--==
import './style.scss'

function AdminLogged() {
  return (

    //==-- COMPONENT ADMINLOGGED --==
    <Card className="adminLogged">
      <Card.Title className="adminLogged-title" >Attention vous êtes en mode administrateur</Card.Title>
    </Card>
    //==-- COMPONENT ADMINLOGGED --==

  );
}

export default AdminLogged;