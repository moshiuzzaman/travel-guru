import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavComponent from '../NavComponent/NavComponent';
import "./Home.css"
import LocationDetails from '../LocationDetails/LocationDetails';
import LocationSlider from '../LocationSlider/LocationSlider';
import FakeData from '../../FakeData/FakeData'
import { AllContext } from '../../App';


const Home = () => {
    const [exactLocation, setExactLocation, loginUser, setLoginUser] = useContext(AllContext)
    const singleLocationHandler = (id) => {
        const existsLocation = FakeData.find(lc => lc.id === id)
        setExactLocation(existsLocation)
    }
    const mystyle = {
        background: `linear-gradient(#ffffffd9,#2a3463a6), url(${exactLocation.background})`,
    }
    return (
        <div className="home" style={mystyle} >
            <Container>
                <NavComponent />
                <Row className="banner-section">
                    <Col md="5">
                        <LocationDetails location={exactLocation}></LocationDetails>
                    </Col>
                    <Col md="7" >
                        <Container>
                            <Row>
                                {
                                    FakeData.map(location => <LocationSlider singleLocationHandler={singleLocationHandler} location={location} key={location.id}></LocationSlider>)
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;