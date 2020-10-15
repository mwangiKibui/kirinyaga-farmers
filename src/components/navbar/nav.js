import React,{useState} from 'react';

//third-party

import {Nav,Navbar,NavItem,NavLink,Collapse,NavbarToggler} from 'reactstrap';
import {useSelector} from 'react-redux';
import classNames from 'classnames';

const Header = () => {

    const [isOpen,setIsOpen] = useState(false);

    const {token} = useSelector(state => state.farmer);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className="nav-header-container">
        <Navbar color="dark" fixed="top" dark expand="md" className="nav-header">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/" className={
                            classNames('nav-link',{'nav-link-active':window.location.pathname === "/"})
                        }>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/products" className={
                            classNames('nav-link',{'nav-link-active':window.location.pathname.includes('/products')})
                        }>
                            Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/aboutus" className={
                            classNames('nav-link',{'nav-link-active':window.location.pathname.includes('/aboutus')})
                        }>
                            About us
                        </NavLink>
                    </NavItem>
                </Nav>

                {
                    token ? (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/account/dashboard" className={
                                    classNames('nav-link',{'nav-link-active':window.location.pathname.includes('/account/dashboard')})
                                }>
                                    Dashboard
                                </NavLink>
                            </NavItem>
                        </Nav>
                    ) : null
                }                


            </Collapse>
        </Navbar>
        </div>
    )
};

export default Header;