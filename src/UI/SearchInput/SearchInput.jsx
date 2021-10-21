import React, { useState } from 'react'
import style from './SearchInput.module.scss'
import Image from '../Image'
import WrongData from '../WrongData/WrongData';

function SearchInput({ placeH, startValue, search }) {
    const [inputValue, setInputValue] = useState(startValue || '');
    const [isOpen, setIsOpen] = useState(false)

    const startSearch = (e) => {
        if (e.key === 'Enter') {
            if (inputValue.trim()) {
                search(inputValue);
                setIsOpen(false);
            }
            else {
                setIsOpen(true);
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
                direction='right'
                timer={true}
                open={isOpen}
            >
                <div className={style.wrapper}>

                    <input
                        className={style.input}
                        placeholder={placeH}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={startSearch}
                    />
                    <button
                        className={!inputValue.trim() ? style.close : `${style.close} ${style.active}`}
                        onClick={() => setInputValue('')}
                    />
                    <button
                        className={style.submit}
                        disabled={Boolean(!inputValue.trim())}
                        onClick={() => search(inputValue)}
                    >
                        <Image className={style.search_image} src={"./images/search.png"} alt='search' />
                    </button>

                </div>
            </WrongData>
        </div >
    )
}

export default SearchInput