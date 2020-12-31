import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Footer from '../components/Footer';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Timothy Nguyen',
            headerLinks: [
                { title: 'Home', path: '/TimothyNguyen'},
                { title: 'About', path: '/TimothyNguyen/about' },
                { title: 'Contact', path: '/TimothyNguyen/contact' }
            ],
            home: {
                title: 'Welcome!',
                subtitle: 'Projects are listed here',
                text: 'Check on what I\'m doing'
            },
            about: {
                title: 'About Me'
            },
            contact: {
                title: 'Contact me!'
            }
        }
    }
    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Home</Navbar.Brand>
                        {/*
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                {<Link className="nav-link" to="/">About</Link>}
                                {<Link className="nav-link" to="/about">Home</Link>}
                                {<Link className="nav-link" to="/contact">Contact</Link>}
                            </Nav>
                        </Navbar.Collapse>
                      */}
                    </Navbar>
                    
                    {/*<Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                    */}
                    <Route path="/TimothyNguyen" render={() => <AboutPage title={this.state.about.title} />} />
                    <Footer />
                </Container>
            </Router>
        );
    }
}

export default HomePage;
