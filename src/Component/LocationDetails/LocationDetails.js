import React from 'react';
import { Button } from 'react-bootstrap';
import "./LocationDetails.css"
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const LocationDetails = (location) => {
    const { name, description } = location.location;
    const shortDescription = description.slice(0, 200)
    return (
        <div>
            <h1 className="bannerHeading">{name}</h1>
            <p>{shortDescription} ....</p>
            <Link to="/booking"><Button className="button">Booking<ArrowRight className="ml-2" /></Button></Link>
        </div>
    );
};

export default LocationDetails;