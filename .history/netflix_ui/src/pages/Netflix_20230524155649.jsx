import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Netflix = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
        </Container>
    );
};

const Container = styled.div``;

export default Netflix;