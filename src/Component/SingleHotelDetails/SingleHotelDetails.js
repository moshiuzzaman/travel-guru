import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./SingleHotelDetails.css"
import { StarFill } from 'react-bootstrap-icons';

const SingleHotelDetails = ({ singleHotel }) => {
    const { name, details, cancellation, star, price, hotelImage } = singleHotel
    return (
        <Row className="singleHotelDetails">
            <Col md={6}>
                <img className="room-image" src={hotelImage} alt="" />
            </Col>
            <Col md={6}>
                <h4 className="room-title">{name}</h4>
                <p className="room-details">{details}</p>
                <p className="room-cancellation">Cancellation Fexibility {cancellation}</p>
                <div className="room-star-price">
                    <StarFill
                        className="room-star-icon"
                        color="#ffc107" />
                    <p className="room-star">{star}</p>
                    <p className="room-price">${price}/Night</p>
                </div>
            </Col>
        </Row>
    );
};

export default SingleHotelDetails;