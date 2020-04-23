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
            Paladins Sidekick
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='https://discordapp.com/oauth2/authorize?client_id=691669920093700116&permissions=536345936&scope=bot' target='_blank'>Invite the Bot</Nav.Link>
                <Nav.Link href='/commands'>Command List</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href='https://discord.gg/cyRugRa' target='_blank'>Join Us On Discord</Nav.Link>
                <Nav.Link href='https://twitter.com/PaladinsDiscord' target='_blank'>Follow Us on Twitter</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;