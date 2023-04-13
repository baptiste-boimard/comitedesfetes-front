// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import info from '../../docs/images/info.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Articles() {
  return (
    <div className='articles'>
    {/* ==--COMPONENT ARTICLE 1--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={info} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Info Spéciale</Card.Title>
            <Card.Text>
              Il parait qu'il fait bon vivre à Theillement
            </Card.Text>
            <Button variant="primary">Lire l'article</Button>
          </Card.Body>
        </Card>
      </article>
      {/* ==--COMPONENT ARTICLE 1--==*/}

      {/* ==--COMPONENT ARTICLE 2--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={info} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Info Spéciale</Card.Title>
            <Card.Text>
              Il parait qu'il fait bon vivre à Theillement
            </Card.Text>
            <Button variant="primary">Lire l'article</Button>
          </Card.Body>
        </Card>
      </article>
      {/* ==--COMPONENT ARTICLE 2--==*/}

      {/* ==--COMPONENT ARTICLE 3--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={info} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Info Spéciale</Card.Title>
            <Card.Text>
              Il parait qu'il fait bon vivre à Theillement
            </Card.Text>
            <Button variant="primary">Lire l'article</Button>
          </Card.Body>
        </Card>
      </article>
      {/* ==--COMPONENT ARTICLE 3--==*/}
    </div>
  );
}

export default Articles;