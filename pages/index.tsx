import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { tips } from '../data/tips/tips';
import Link from 'next/link'

const homeImageGrid = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
};

const Home = () => (
    <Layout title="Home">
        <Row>
            {Object.keys(tips).map((key: any) => (
                <Link href='/hero/[hid]' as={`/hero/${key}`}>
                    <a>
                    <Col md={3} sm={12}>
                        <Card className='bg-dark text-white'>
                            <Card.Img src={tips[key].meta.profile_image}></Card.Img>
                            <Card.ImgOverlay style={homeImageGrid} className='d-flex'>
                                <div className='my-auto mx-auto text-center'>
                                    <Card.Title className='display-4'>{tips[key].meta.display_name}</Card.Title>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    </a>
                </Link>
            ))}
        </Row>
    </Layout>
);

export default Home;