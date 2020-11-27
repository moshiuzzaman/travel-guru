import React from 'react';
import { Container } from 'react-bootstrap';
import NavComponent from '../NavComponent/NavComponent';

const NoMatch = () => {
    return (
        <Container>
            <div className="NavWithBorder">
                <NavComponent ></NavComponent>
            </div>
            <h1>Sorry!! This Page Not Found!</h1>
        </Container>
    );
};

export default NoMatch;