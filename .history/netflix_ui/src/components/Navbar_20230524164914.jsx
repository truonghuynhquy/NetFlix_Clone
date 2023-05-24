import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { firebaseAuth } from '../utils/firebase-config';

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
                    <ul className='links flex'>
                        {links.map(({ name, link }) => {
                            return (
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="right flex a-center">
                    <div className={`search ${showSearch ? "show-search" : ""}`}>
                        <button
                            onFocus={() => setShowSearch(true)}
                            onBlur={() => {
                                if (!inputHover) setShowSearch(false)
                            }}
                        >
                            <FaSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Search"
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setShowSearch(false);
                                setInputHover(false);
                            }}
                        />
                    </div>
                    <button onClick={() => signOut(firebaseAuth)}>
                        <FaPowerOff />
                    </button>
                </div>
            </nav>
        </Container>
    );
};

const Container = styled.div`
    .scroll {
        background-color: black;
    }
    nav {
        position: sticky;
        top: 0;
        height: 6.5rem;
        width: 100%;
        justify-content: space-between;
        padding: 0 4rem;
        .left {
            gap: 2rem;
            .brand {
                img {
                    height: 4rem;
                }
            }
            .links {
                list-style-type: none;
                gap: 2rem;
                li {
                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
        .right {
            gap: 1rem;
            button {
                // background-color: transparent;
                border: none;
                cursor: pointer;
                // &:focus {
                //     outline: none;
                // }
            }
        }
    }
`;

export default Navbar;