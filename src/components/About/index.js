import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import HeaderReactstrap from '../Common/header_reactstrap';
import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const {className, ...props} = this.props;
        return (
            <div className={classnames('About', className)} {...props}>
                <HeaderReactstrap/>
                <h1>
                    About
                </h1>
            </div>
        );
    }
}