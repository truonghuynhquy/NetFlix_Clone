import React from 'react';
import styled from 'styled-components';

const Navbar = (isScrolled) => {

    const links = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
    ];

    return (
        <Container>
            <nav className={`${isScrolled ? "scrolled" : ""} flex`}>

            </nav>
        </Container>
    );
};

const Container = styled.div``;

export default Navbar;