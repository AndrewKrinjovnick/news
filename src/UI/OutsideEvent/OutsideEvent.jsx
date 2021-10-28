import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import style from './OutsideEvent.module.scss'

export default class OutsideEvent extends Component {
    constructor(props) {
        super(props);
        this.elemRef = createRef();
        this.addEvent = this.addEvent.bind(this);
    }

    addEvent = (event) => {
        if ((this.elemRef.current !== event.target && !this.elemRef.current.contains(event.target)) || event.key === 'Escape') {
            this.props.outsideEvent();
        }
    }

    componentDidMount() {
        ['click', 'keydown'].forEach((evt) => {
            document.addEventListener(evt, this.addEvent);
        });
    }

    componentWillUnmount() {
        ['click', 'keydown'].forEach((evt) => {
            document.removeEventListener(evt, this.addEvent);
        });
    }

    render() {
        return (
            <div
                className={style.wrapper}
                ref={this.elemRef}
            >
                {this.props.children}
            </div>
        )
    }
}

OutsideEvent.propTypes = {
    children: PropTypes.node.isRequired,
    outsideEvent: PropTypes.func.isRequired
};