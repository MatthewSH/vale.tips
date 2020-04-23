import Navigation from './navigation';
import Header from './head';

const Layout = props => (
    <div>
        <Header title={props.title} />
        
        <Navigation />

        <div className='px-5 mt-3'>
            {props.children}
        </div>
    </div>
);

export default Layout;