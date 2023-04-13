// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';

// ==--IMPORT STYLE--==
import './style.scss'

function Menu() {
  return (

    <div className="menu">
    {/* ==--COMPONENT MENU--== */}
      <Button variant="outline-primary">L'équipe</Button>{' '}
      <Button variant="outline-secondary">Contact</Button>{' '}
      <Button variant="outline-success">Evènement</Button>{' '}
      <Button variant="outline-warning">Archive</Button>{' '}
      <Button variant="outline-danger">Autre</Button>{' '}
      {/* ==--COMPONENT MENU--== */}
    </div>
    

  );
}

export default Menu;