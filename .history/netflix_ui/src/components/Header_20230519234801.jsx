import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Header = (props) => {
    return (
        <StyledHeader className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </StyledHeader>
    );
};

const StyledHeader = styled.div``;

export default Header;