import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
            <img
            alt=''
            src='/logo.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            />{' '}
            Vale Tips
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href='' target='_blank'>Twitch</Nav.Link>
                <Nav.Link href='' target='_blank'>Twitter</Nav.Link>
                <Nav.Link href='' target='_blank'>Discord</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;