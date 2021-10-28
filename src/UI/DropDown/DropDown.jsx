import React, { useState } from 'react'
import style from './DropDown.module.scss'
import OutsideEvent from '../OutsideEvent/OutsideEvent';
import PropTypes from 'prop-types'

function DropDown({ options, getNewValue }) {
    const [currentElem, setCurrentElem] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const chooseOption = (option) => {
        setCurrentElem(option);
        setIsOpen(false);
        getNewValue(option);
    }

    return (
        <OutsideEvent
            outsideEvent={
                () => {
                    setIsOpen(false)
                }
            }
        >
            <div className={`${style.wrapper} unselectable`} >
                <div
                    className={isOpen ? `${style.header} ${style.active}` : style.header}
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    {currentElem}
                </div>
                {
                    isOpen
                    &&
                    <div className={style.body}>
                        {
                            options.map((option, index) => (
                                <div
                                    className={currentElem === option ? `${style.option} ${style.active}` : style.option}
                                    key={index}
                                    onClick={() => chooseOption(option)}
                                >
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </OutsideEvent>
    )
}

DropDown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])),
    getNewValue: PropTypes.func
}

export default DropDown