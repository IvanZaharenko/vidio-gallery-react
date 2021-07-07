import React from 'react'
import './Item.css'


const Item = () => {
    return (
        <a href="#" className='itemMovie'>
            <div>
                <img src="https://image.tmdb.org/t/p/w500/7SivRwOLuA6DR09zNJ9JIo14GyX.jpg" alt="Постер фильма"/>
                <p className='titleItem'>Название фильма</p>
                <p className='voteItem'>Рейтинг</p>
                <p className='releaseItem'>Дата выхода</p>
            </div>
        </a>
    )
};

export default Item
