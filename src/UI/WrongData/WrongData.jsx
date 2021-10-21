import React from 'react'
import style from './WrongData.module.scss'

class WrongData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    componentDidUpdate(preProps) {
        if (preProps.open !== this.props.open) {
            this.setState({ isOpen: true })
        }

        if (this.props.timer) {
            this.timer(this.props.time || 3000)
        }
    }

    timer(time) {
        setTimeout(() => {
            this.setState({ isOpen: false })
        }, time)
    }

    render() {
        return (
            <div
                className={style.tooltip_wrapper}
            >
                {this.props.children}
                {
                    this.state.isOpen
                    &&
                    <div
                        className={`${style.tooltip} ${style[this.props.direction]}`}
                        style={
                            this.props.style
                        }
                    >
                        <div
                            className={`${style.triangle} ${style[this.props.direction + '-direction']}`}
                        />
                        <div className={style.tooltip_body}>
                            {this.props.message}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default WrongData;