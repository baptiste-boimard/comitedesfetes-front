import { useDispatch, useSelector } from 'react-redux';

// ==IMPORT BOOTSTRAP==
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-bootstrap';



// ==--IMPORT IMAGE--==
// ==IMPORT COMPONENTS==
// ==--IMPORT STYLE--==
import './style.scss'

// ==IMPORT ACTION==
import { toogleAddAdmin, toogleManageAdmin, closeAddAdmin, closeManageAdmin } from '../../../slice/admin';
import { handleFieldChange } from '../../../slice/utilities';

function AdminManagement() {

  const dispatch = useDispatch();

  // ==CALL STORE==
  const { email, password } = useSelector((state) => state.utilitiesReducer);
  const { isOpenAddAdmin, isOpenManageAdmin } = useSelector((state) => state.adminReducer);

  // == ACTIONS ==
  /**
 * Controlled fields
 * @handleChange Change input state value 
 */
  const handleChange = (e) => {
    dispatch(handleFieldChange({
      value: e.target.value,
      name: e.target.name}));
  };
  /**
   * Clicking cancel button
   * @openManageAdmin Open Modal for admin management
   */
  const handleClickManage = () => {
    dispatch(toogleManageAdmin());
    dispatch(closeAddAdmin());
  };
  /**
   * Clicking Add admin button
   * @openAddAdmin Open Modal for add an admin
   */
  const handleClickAdd = () => {
    dispatch(toogleAddAdmin());
    dispatch(closeManageAdmin());
  };
  /**
   * Clicking cancel button
   * @closeAddAdmin Close Modal Add an admin
   */
  const handleCloseAddAdmin = () => {
    dispatch(closeAddAdmin());
  };
  /**
   * Clicking cancel button
   * @closeManageAdmin Close Modal admin management
   */
   const handleCloseManageAdmin = () => {
    dispatch(closeManageAdmin());
  };

  return (

    //==-- COMPONENT ADMIN MANAGMENENT --==
    <Card className="management">
      <Card.Title className="management-title" >Administration des comptes</Card.Title>
      <Card.Body className="management-body" >
        <Button variant="primary" onClick={handleClickManage}>Gérer les comptes admin</Button>{' '}
        <Button variant="primary" onClick={handleClickAdd}>Ajouter un admin</Button>

      {/* ==-- OPENING MODAL ACCOUNT MANAGEMENT--== */}
      {(isOpenManageAdmin && 
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseManageAdmin}>Annuler</Button>
              <Button variant="primary">Appliquer</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
      {/* ==-- OPENING MODAL ACCOUNT MANAGEMENT--== */}





        {/* ==-- OPENING MODAL SIGNUP --== */}
        {isOpenAddAdmin && (
          <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
          >
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Ajouter un admin</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email"
                                  placeholder="Entrer votre Email"
                                  value={email}
                                  name="email"
                                  title="Email"
                                  onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" 
                                  placeholder="Mot de passe"
                                  value={password}
                                  name="password"
                                  title="Mot de passe"
                                  onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  </Form.Group>
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddAdmin}>Annuler</Button>
                <Button variant="primary" /*onClick={handleSubmitSignup}*/>Ajouter</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        )}
        {/* ==-- OPENING MODAL SIGNUP --== */}

      </Card.Body>

    </Card>
    //==-- COMPONENT ADMIN MANAGMENENT --==

  );
}

export default AdminManagement;