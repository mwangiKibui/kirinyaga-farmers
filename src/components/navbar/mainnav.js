import React from 'react';

//third-party
import {Navbar,NavbarBrand,Nav, NavItem,NavLink} from 'reactstrap';
import {useSelector} from 'react-redux';

const Mainnav = () => {

    const {token} = useSelector(state => state.farmer);

    return (
        <div className="main-nav">
            <Navbar color="light" fixed="top" light expand="md">
                <NavbarBrand href="/">

                    <img src="/images/logo.jpeg" className="main-nav-logo" alt="" />
                    
                </NavbarBrand>
                
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink href="/" className="main-nav-title text-success">
                            KIRINYAGA IS GREEN 
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    {
                        !token ? (
                            <>
                            <NavItem>
                                <NavLink href="/auth/signin" className="btn btn-danger text-white">
                                    Signin as farmer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/auth/signup" className="btn btn-success text-white" >
                                    Create account as farmer
                                </NavLink>
                            </NavItem>
                            </>
                        ) : (
                            <NavItem>
                                <NavLink href="/auth/logout" className="btn btn-danger text-white">
                                    Logout
                                </NavLink>
                            </NavItem>
                        )
                    }
                    
                </Nav>

            </Navbar>
        </div>
    )
};

export default Mainnav;