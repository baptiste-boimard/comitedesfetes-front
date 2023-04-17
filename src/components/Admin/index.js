import { useSelector } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
import Login from '../Login';

// ==--IMPORT STYLE--==
import './style.scss'
import AdminManagement from './AdminManagement';

function Admin() {

  // ==CALL STORE==
  const {adminLogged } = useSelector((state) => state.loginReducer);


  return (
    //==-- COMPONENT ADMIN --==
    <Card className="admin">
      {(!adminLogged && 
        <Card.Title className="admin-title">Administration</Card.Title>
      )}
      <Login />
      {(adminLogged && <AdminManagement /> )}

    </Card>
    //==-- COMPONENT ADMIN --==

  );
}

export default Admin;