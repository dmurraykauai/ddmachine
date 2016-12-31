// src/components/Stocks/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Header from '../Common/header';



export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('Stocks', className)} {...props}>
                <Header loading={this.props.loading}/>
                <h1>
                    Stockings!!!
                </h1>
            </div>
        );
    }
}
