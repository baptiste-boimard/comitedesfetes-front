// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
// ==--IMPORT STYLE--==
import './style.scss'

function AdminManagement() {

  // == ACTIONS ==
const handleClickLManage = () => {
  console.log("coucou");
};
const handleClickAdd = () => {
  console.log("coucou");
};
  return (

    //==-- COMPONENT ADMIN MANAGMENENT --==
    <Card className="management">
      <Card.Title className="management-title" >Administration des comptes</Card.Title>
      <Card.Body className="management-body" >
        <Button variant="primary" onClick={handleClickLManage}>Gérer les comptes admin</Button>{' '}
        <Button variant="primary" on onClick={handleClickAdd}>Ajouter un admin</Button>
      </Card.Body>

    </Card>
    //==-- COMPONENT ADMIN MANAGMENENT --==

  );
}

export default AdminManagement;