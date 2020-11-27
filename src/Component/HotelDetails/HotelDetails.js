import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavComponent from '../NavComponent/NavComponent';
import "./HotelDetails.css"
import { AllContext } from '../../App';
import SingleHotelDetails from '../SingleHotelDetails/SingleHotelDetails';
import GoogleMapComponent from '../GoogleMapComponent/GoogleMapComponent';

const HotelDetails = () => {
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext)
    const { name, hotel } = exactLocation
    return (
        <Container>
            <div className='NavWithBorder'>
                <NavComponent ></NavComponent>
            </div>
            <Row>
                <Col md={6}>
                    <p className="hotel-pragraph">Please click Menu's Username</p>
                    <h4>Stay in {name}</h4>
                    {
                        hotel.map(sh => <SingleHotelDetails singleHotel={sh} key={sh.id}></SingleHotelDetails>)
                    }
                </Col>
                <Col className="map-section" md={6}>
                    <GoogleMapComponent></GoogleMapComponent>
                </Col>
            </Row>
        </Container>
    );
};

export default HotelDetails;