import Head from 'next/head';

const Header = (props) => (
    <div>
        <Head>
            <title>{ (props.title ? `${props.title} / Vale Tips` : `Vale Tips`) }</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
)

export default Header;