// ==IMPORT BOOTSTRAP==
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// ==--IMPORT IMAGE--==
import art1 from '../../docs/images/art1.png'
import art2 from '../../docs/images/art2.png'
import art3 from '../../docs/images/art3.png'

// ==--IMPORT STYLE--==
import './style.scss'

function Articles() {
  return (
    <div className='articles'>
    {/* ==--COMPONENT ARTICLE 1--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={art1} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Article 1</Card.Title>
            <Card.Text>
              Article 1
            </Card.Text>
            <Button variant="primary">Lire l'article</Button>
          </Card.Body>
        </Card>
      </article>
      {/* ==--COMPONENT ARTICLE 1--==*/}

      {/* ==--COMPONENT ARTICLE 2--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={art2} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Article 2</Card.Title>
            <Card.Text>
              Article 2
            </Card.Text>
            <Button variant="primary">Lire l'article</Button>
          </Card.Body>
        </Card>
      </article>
      {/* ==--COMPONENT ARTICLE 2--==*/}

      {/* ==--COMPONENT ARTICLE 3--==*/}
      <article className='article'>
        <Card className='article-card'>
          <Card.Img variant="top" src={art3} className="article-card--image"/>
          <Card.Body>
            <Card.Title>Article 3</Card.Title>
            <Card.Text>
              Article 3
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