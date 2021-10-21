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
        if (this.elemRef.current !== event.target && !this.elemRef.current.contains(event.target)) {
            this.props.outsideEvent.callback(event);
        }
    }

    componentDidMount() {
        document.addEventListener(this.props.outsideEvent.type, this.addEvent);
    }

    componentWillUnmount() {
        document.removeEventListener(this.props.outsideEvent.type, this.addEvent);
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
    children: PropTypes.element.isRequired,
};