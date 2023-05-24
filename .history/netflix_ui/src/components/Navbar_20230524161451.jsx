import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Navbar = (isScrolled) => {

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

    const links = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
    ];

    return (
        <Container>
            <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </nav>
        </Container>
    );
};

const Container = styled.div``;

export default Navbar;