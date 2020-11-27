import React, { useContext, useState } from 'react';
import { Button, Form, FormControl, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AllContext } from '../../App';
import logo from '../../image/LogoWhite.png'
import "./NavComponent.css"
import * as firebase from "firebase/app";
import "firebase/auth";



const NavBlackComponent = () => {
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const logOutHandeler = () => {
        firebase.auth().signOut().then(function () {
            setLoginUser({})
            setShow(false);
        })
    }
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand className="WhiteLogo" href="#home">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl className="WhiteNavSearch" type="text" placeholder="Search your Destination..." />
                    </Form>
                    <Nav className="ml-auto">
                        <Link className="white-menu" to="/">Home</Link>
                        <Link className="white-menu" to="/destination">Destination</Link>
                        <Link className="white-menu" to="/blog">Blog</Link>
                        <Link className="white-menu" to="/contact">Contact</Link>
                        {
                            loginUser.email ? <p onClick={handleShow} className="menu-UserName" >{loginUser.displayName}</p> : <Link to="/login"><Button className="button">Log In</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* User Info Pop Up */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img align="center" className="userPhoto" src={loginUser.photoURL} alt="No Pic Found" />
                    <p>Name : {loginUser.displayName} </p>
                    <p>Email : {loginUser.email}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={logOutHandeler}>Log Out</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default NavBlackComponent;