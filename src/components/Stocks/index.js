import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import HeaderReactstrap from '../Common/header_reactstrap';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('Stocks', className)} {...props}>
                <HeaderReactstrap/>
                <h1>
                    Stockings!!!
                </h1>
            </div>
        );
    }
}
