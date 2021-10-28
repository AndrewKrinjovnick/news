import React, { useEffect, useState } from 'react'
import style from './SearchInput.module.scss'
import Image from '../Image'
import WrongData from '../WrongData/WrongData';
import PropTypes from 'prop-types';

function SearchInput({ placeH, startValue, search }) {
    const [inputValue, setInputValue] = useState(startValue || '');
    const [isOpen, setIsOpen] = useState(false);
    const [emptyField, setEmptyField] = useState(false);
    let timer;

    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const submitSearch = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            if (inputValue.trim()) {
                search(inputValue);
            }
            else {
                console.log('click')
                setInputValue('');
                clearTimeout(timer);
                setEmptyField(true);
                setIsOpen(!isOpen);
                timer = setTimeout(() => {
                    setEmptyField(false);
                }, 1000)
            }
        }
    }

    return (
        <div className={style.search}>
            <WrongData
                message="Empty field"
                style={
                    {
                        left: '-130px'
                    }
                }
                direction='left'
                timer={true}
                open={isOpen}
            >
                <div className={style.wrapper}>
                    <input
                        className={emptyField ? `${style.input} ${style.empty}` : style.input}
                        placeholder={placeH}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={submitSearch}
                    />
                    <button
                        className={!inputValue.trim() ? style.close : `${style.close} ${style.active}`}
                        onClick={() => setInputValue('')}
                    />
                    <button
                        className={style.submit}
                        onClick={submitSearch}
                    >
                        <Image className={style.search_image} src={"./images/search.png"} alt='search' />
                    </button>

                </div>
            </WrongData>
        </div >
    )
}

SearchInput.propTypes = {
    placeH: PropTypes.string,
    startValue: PropTypes.string,
    search: PropTypes.func.isRequired
}

export default SearchInput