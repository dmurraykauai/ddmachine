// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Common/header';

import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <Header loading={this.props.loading}/>
                <h1>
                    About
                </h1>
            </div>
        );
    }
}