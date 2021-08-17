import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadChangeSort} from "../../../store/actions";

import './Sort.css'

export const Sort = () => {
    const dispatch = useDispatch();
    const {typeSort} = useSelector((state) => state.videos);

    const changeSortClick = ({target}) => {
        dispatch(loadChangeSort(target.value))
    };

    return (
        <select
            value={typeSort}
            onChange={changeSortClick}
            id="sortForm"
            name="typeSort"
            className="sel_main">
            <option value="vote_count.desc">Рейтинг зрителей (убывание)</option>
            <option value="vote_count.asc">Рейтинг зрителей (возростание)</option>
            <option value="release_date.desc">Дата выхода (убывание)</option>
            <option value="release_date.asc">Дата выхода (возростание)</option>
        </select>
    )

};
