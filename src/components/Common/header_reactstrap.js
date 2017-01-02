import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class HeaderReactstrap extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="/" active>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/stocks">Stocks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">(test) Disabled Link</NavLink>
                    </NavItem>
                    <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle nav caret>
                            Tools
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Trading Tools</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Fibonacci Calculator</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Pivot Point Calculator</DropdownItem>
                        </DropdownMenu>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
}