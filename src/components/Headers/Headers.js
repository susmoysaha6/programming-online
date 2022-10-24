import { Button, DarkThemeToggle, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/'
                >
                    Home
                </Link>
                <Link to="/">
                    About
                </Link>
                <Link to="/">
                    Services
                </Link>
                <Link to="/">
                    Pricing
                </Link>
                <Link to="/">
                    Contact
                </Link>
            </Navbar.Collapse>
            <DarkThemeToggle />
        </Navbar>
    );
};

export default Headers;