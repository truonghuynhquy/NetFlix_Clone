import React from 'react';
import styled from 'styled-components';
import background from '../images/background.jpg';

const BackgroundImage = () => {
    return (
        <Container>
            <img src={background} alt="background" />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;`;

export default BackgroundImage;