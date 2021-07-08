import React, {useEffect} from 'react'

import './pagination.css'
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPage, loadChangeCurrentPage} from "../../../store/actions";


export const Pagination = () => {
    const dispatch = useDispatch();

    const {currentPageState, typeSort} = useSelector((state) => state.videos);


    const [currentPage, setCurrentPage] = React.useState(currentPageState);
    let maxPages = 15;
    let items = [];
    let leftSide = currentPage - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = currentPage + 2;
    if (rightSide > maxPages) rightSide = maxPages;

    const handleChangeNumber = (value) => {
        if (value === currentPage) return;

        setCurrentPage(value);
        dispatch(loadChangeCurrentPage({page: value, typeSort: typeSort}));
    };

    const handleChangePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            dispatch(loadChangeCurrentPage({page: currentPage - 1, typeSort: typeSort}));
        }
    };

    const handleChangeNextPage = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1);
            dispatch(loadChangeCurrentPage({page: currentPage + 1, typeSort: typeSort}));
        }
    };


    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <div id={number} key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')}
                 onClick={() => {
                     handleChangeNumber(number)
                 }}>
                {number}
            </div>,
        );
    }

    return (<>
            <div className="container_pagination">
                <div className="pagination">
                    <div className="round-effect" onClick={handleChangePrevPage}> ‹ Предыдущая</div>
                    {items}
                    <div className="round-effect" onClick={handleChangeNextPage}> Следующая ›</div>
                </div>
            </div>
        </>
    )
};




