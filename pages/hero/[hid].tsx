import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { tips } from '../../data/tips/tips';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Hero = () => {
    const router = useRouter()
    const { hid } = router.query;
    const hero = tips[String(hid)];

    if (!hero) {
        return (
            <Layout title='Hero Not Found'>
                <h1>Hero not found.</h1>
            </Layout>
        )
    }

    return (
        <Layout title={hero.meta.display_name}>
            <Row>
                <Col md={3} sm={12}>
                    <Card>
                        <Card.Img variant='top' src={hero.meta.profile_image} />
                        <Card.Body>
                            <Card.Title>
                                <h2>{hero.meta.display_name}</h2>
                            </Card.Title>
                            <Card.Text>
                                <div>
                                    <b>Total Tips Available:</b> { hero.tips.length }
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={9} sm={12}>
                    <Accordion>
                        {hero.tips.map((t: any, k: any) => (
                            <Card key={t.id}>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey={t.id}>
                                        {t.title} <span className='small text-muted'>By {t.author.display_name}</span>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey={t.id}>
                                    <Card.Body>{t.long}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Layout>
    );
}

export default Hero;