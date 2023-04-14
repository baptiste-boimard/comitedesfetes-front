// ==--IMPORT COMPONENTS--==
// ==--IMPORT BOOTSTRAP--==
import Card from 'react-bootstrap/Card';
// ==--IMPORT IMAGE--==
import team from '../../docs/images/team.png'
import left from '../../docs/images/left.png'
import right from '../../docs/images/right.png'
import brain from '../../docs/images/brain.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Team() {
  return (
    <>
      {/* // ==-- COMPONENT CARD TEAM --== */}
      <Card className="team" >
        <Card.Title className="team-title" >L'équipe</Card.Title>
        <Card.Img variant="top" src={team} className="team-image"/>
        <Card.Body>
          <Card.Text className="team-text" >
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Card.Text>
        </Card.Body>
      </Card>
      {/* // ==-- COMPONENT CARD TEAM --== */}

      {/* // ==-- COMPONENT CARD MEMBERS --== */}
      <Card className="members" >
      <Card.Title className="members-title" >Nos membres</Card.Title>
      <Card.Body className="members-container" >
        
        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}
        <Card className="member-card" >
          <Card.Img variant="top" src={brain} className="member-card--image" />
          <Card.Body>
            <Card.Title>Cer Vo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Président</Card.Subtitle>
            <Card.Text>
              La tête pensante du comité
            </Card.Text>
          </Card.Body>
        </Card>
        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}
        <Card className="member-card" >
          <Card.Img variant="top" src={right} className="member-card--image" />
          <Card.Body>
            <Card.Title>Bra Droi</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Président-adjoint</Card.Subtitle>
            <Card.Text>
              Le bras droit
            </Card.Text>
          </Card.Body>
        </Card>
        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}
        <Card className="member-card" >
          <Card.Img variant="top" src={left} className="member-card--image" />
          <Card.Body>
            <Card.Title>Bra Goch</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">??</Card.Subtitle>
            <Card.Text>
              Faut bien faire la paire
            </Card.Text>
          </Card.Body>
        </Card>
        {/* // ==-- COMPONENT FOR ONE CARD MEMBER --== */}

      </Card.Body>
      </Card>
      {/* // ==-- COMPONENT CARD MEMBERS --== */}
    </>
  );
}

export default Team;