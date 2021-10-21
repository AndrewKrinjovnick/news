import React, { useState } from 'react'
import style from './DropDown.module.scss'
import OutsideEvent from '../OutsideEvent/OutsideEvent';

function DropDown({ options, getNewValue }) {
    const [currentElem, setCurrentElem] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const chooseOption = (option) => {
        setCurrentElem(option);
        setIsOpen(false);
        getNewValue(option);
    }

    // const closeOptionsEscape = (e) => {
    //     if (e.code === 'Escape') {
    //         setIsOpen(false);
    //     }
    // }

    const closeOptions = (e) => {
        setIsOpen(false)
    }

    return (
        <OutsideEvent
            outsideEvent={
                {
                    type: 'click',
                    callback: closeOptions
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

export default DropDown