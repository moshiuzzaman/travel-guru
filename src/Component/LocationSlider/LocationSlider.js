import React from 'react';
import { Col } from 'react-bootstrap';
import "./LocationSlider.css"


const LocationSlider = ({ location, singleLocationHandler }) => {
    const { name, sliderImage, id } = location
    const mystyle = {
        background: `linear-gradient(#09090905,#2a3463a6), url(${sliderImage})`,
        backgroundSize: 'cover',
        borderRadius: ' 35px'
    }
    return (
        <Col onClick={() => singleLocationHandler(id)} className="singleLocation" style={mystyle} >
            <h4>{name}</h4>
        </Col>
    );
};

export default LocationSlider;