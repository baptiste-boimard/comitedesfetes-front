// ==--IMPORT COMPONENTS--==
// ==--IMPORT BOOTSTRAP--==
import Card from 'react-bootstrap/Card';
// ==--IMPORT IMAGE--==
import phone from '../../docs/images/phone.png'
import mail from '../../docs/images/mail.png'
import home from '../../docs/images/home.png'
import facebook from '../../docs/images/facebook.png'
import instagram from '../../docs/images/instagram.png'
import whatapp from '../../docs/images/whatapp.png'
import map from '../../docs/images/map.png'


// ==--IMPORT STYLE--==
import './style.scss'

function Contact() {
  return (
    <>
      {/* // ==--COMPONENT CONTACT CARDS--== */}
      <Card className="contact" >
        <Card.Title>Pour nous contacter, c'est simple</Card.Title>
        <Card.Body className="contact-cardContainer" >

          {/* // ==-- COMPONENT FOR ONE CARD CONTACT --== */}
          <Card className="contact-card" >
            <Card.Img variant="top" src={phone} className="contact-card--image" />
            <Card.Title className="contact-card--title">06 65 56 65 56</Card.Title>
          </Card>
          {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

          {/* // ==-- COMPONENT FOR ONE CARD CONTACT --== */}
          <Card className="contact-card" >
            <Card.Img variant="top" src={mail} className="contact-card--image" />
            <Card.Title className="contact-card--title">comitedesfetes@thénouville.fr</Card.Title>
          </Card>
          {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

          {/* // ==-- COMPONENT FOR ONE CARD CONTACT --== */}
          <Card className="contact-card" >
            <Card.Img variant="top" src={home} className="contact-card--image" />
            <Card.Title className="contact-card--title home">
            Maison des associations {<br/>}
            à coté de l'école{<br/>}
            Theillement{<br/>}
            </Card.Title>
          </Card>
          {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

          {/* // ==-- COMPONENT FOR ONE CARD CONTACT --== */}
          <Card className="contact-card" >
            <Card.Img variant="top" src={facebook} className="contact-card--image" />
            <Card.Img variant="top" src={instagram} className="contact-card--image" />
            <Card.Img variant="top" src={whatapp} className="contact-card--image" />       
          </Card>
          {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

        </Card.Body>
      </Card>
      {/* // ==--COMPONENT CONTACT CARDS--== */}


      {/* // ==--COMPONENT CONTACT MAP--== */}
      <Card className="map">
        <Card.Img variant="top" src={map} className="contact-card--map" />
      </Card>
      {/* // ==--COMPONENT CONTACT MAP--== */}

    </>

  );
}

export default Contact;