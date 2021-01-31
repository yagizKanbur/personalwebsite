import {Container, Nav, Navbar} from "react-bootstrap";
import React from 'react';

const NavigationBar = () => {
    return(
        <Container>
            <Navbar bg={'transparent'} expand={'lg'} fixed={"top"}>
                <Navbar.Brand href={'/'}>@yagizKanbur</Navbar.Brand>
                <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                <Navbar.Collapse id={'basic-navbar-nav'}>
                    <Nav className={'text-center'} variant={'tabs'} defaultActiveKey={'/home'}>
                        <Nav.Item className={'align-items-center'}>
                            <Nav.Link href={'/'}>Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={'align-items-center'}>
                            <Nav.Link href={'/about'}>About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>

    );
}

export default NavigationBar;