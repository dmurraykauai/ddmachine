import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
//import ReactBootstrap from 'react-bootstrap';
import Header from '../Common/header';
import HeaderReactstrap from '../Common/header_reactstrap';
import {Button} from 'reactstrap';

import logo from './logo.svg';
import './style.css';

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (

            <div className={classnames('App', className)} {...props}>
                <HeaderReactstrap/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to The DDMachine</h2>
                </div>
            </div>
        );
    }
}


export default App;
