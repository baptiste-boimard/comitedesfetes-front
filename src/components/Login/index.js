import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

// ==IMPORT BOOTSTRAP==
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


// ==IMPORT ACTION==
import { disconnectAdmin } from '../../slice/login';
import { handleFieldChange } from '../../slice/utilities';

// ==-- IMPORT THUNK MIDDLEWARE --==
import { fetchUser } from '../../slice/auth';






function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

// ==CALL STORE==
const { email, password } = useSelector((state) => state.utilitiesReducer);
const { adminLogged } = useSelector((state) => state.loginReducer);
// const { emailAuth } = useSelector((state) => state.authReducer);



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
 * Clicking cancel button on login modal
 * @handleCancelLogin redirect to "/"
 */
  const handleCancelModal = () => {
    navigate("/");
  };
  /**
 * Clicking submit login button
 * @submitLogin POST request to API for login users
 */
  const handleSubmitLogin = (e) => {
  e.preventDefault();
  dispatch(fetchUser({email, password}));
  };
  /**
   * Clicking on disconnect button
   @handleDisconnect Disconnect admin
   */
  const handleDisconnect = () => {
    dispatch(disconnectAdmin());
  };


  return (

    <Card className="login">

      {/* ==-- MODAL LOGIN --== */}
        {(!adminLogged && 
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog >
            <Modal.Header>
              <Modal.Title>Veuillez vous connecté</Modal.Title>
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
                <Form.Group className="mb-3" controlId="formBhandleSubmitLoginasicCheckbox">
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancelModal}>Annuler</Button>
              <Button variant="primary" onClick={handleSubmitLogin}>Se Connecter</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        )}
      {/* ==-- MODAL LOGIN --== */}

      {/* ==-- MODAL DISCONNECT --== */}
      {(adminLogged && 
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog >
            <Modal.Header>
              <Modal.Title>Vous êtes connecté</Modal.Title>
            </Modal.Header>

            

            <Modal.Footer>
              <Button variant="primary" onClick={handleCancelModal}>Accueil</Button>
              <Button variant="primary" onClick={handleDisconnect}>Se déconnecter</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        )}
      {/* ==-- MODAL DISCONNECT --== */}
    </Card>

  );
}

export default Login;
