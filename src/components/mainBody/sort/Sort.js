import React from "react";
import { useDispatch} from "react-redux";
import {changeSort} from "../../../store/actions";

export const Sort = () => {
    const dispatch = useDispatch();

    const changeSortClick = ({target}) => {
        dispatch(changeSort(target.value));
    };

    return (
        <select
            onChange={changeSortClick}
            id="sortForm"
            name="typeSort"
            className="sel_main">
                <option value="vote_count.desc" selected>Рейтинг зрителей (убывание)</option>
                <option value="vote_count.asc">Рейтинг зрителей (возростание)</option>
                <option value="release_date.desc">Дата выхода (убывание)</option>
                <option value="release_date.asc">Дата выхода (возростание)</option>
        </select>
    )

};
