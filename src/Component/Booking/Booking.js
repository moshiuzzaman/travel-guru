import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AllContext } from '../../App';
import BookingForm from '../BookingForm/BookingForm';
import NavComponent from '../NavComponent/NavComponent';

const Booking = () => {
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext)
    const mystyle = {
        background: `linear-gradient(#ffffffd9,#2a3463a6), url(${exactLocation.background})`,
        backgroundSize:"cover"
    }
    const { name, description } = exactLocation;
    return (
        <div className="home" style={mystyle} >
            <Container >
                <NavComponent />
                <Row className="pt-5 pb-4">
                    <Col md="6">
                        <h1 className="bannerHeading">{name}</h1>
                        <p className="pb-5">{description}</p>
                    </Col>
                    <Col md="6"  className="mt-5" >
                        <BookingForm className="mt-5" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;