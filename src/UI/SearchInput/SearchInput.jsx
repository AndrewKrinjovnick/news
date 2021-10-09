import React, { useState } from 'react'
import style from './SearchInput.module.scss'
import Image from '../Image'

function SearchInput({ placeH, startValue, search }) {
    const [inputValue, setInputValue] = useState(startValue || '');

    const startSearch = (e) => {
        if (e.key === 'Enter') {
            search(inputValue)
        }
    }

    return (
        <div className={style.search}>
            <div className={style.wrapper}>
                <input
                    className={style.input}
                    placeholder={placeH}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={startSearch}
                >

                </input>
                <button
                    className={!inputValue.trim() ? style.close : `${style.close} ${style.active}`}
                    onClick={() => setInputValue('')}
                />
                <button
                    className={style.submit}
                    disabled={Boolean(!inputValue.trim())}
                    onClick={() => search(inputValue)}
                >
                    <Image className={style.search_image} src={"./images/search.png"} />
                </button>
            </div>
        </div>
    )
}

export default SearchInput