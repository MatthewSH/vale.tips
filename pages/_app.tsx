import App from 'next/app';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/lux/bootstrap.min.css"; 
import './_global.css';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return <Component { ...pageProps } />;
    }
}