import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import GalleryService from "../../servises/videoApi-servis";
import {changeLoad, loadFilmPage, loadFilms} from "../../store/actions";

import './app.css'
import Header from "../header/Header";
import MainBody from "../mainBody/MainBody";
import Spinner from "../spinner/Spinner";


const App = () => {
    const dispatch = useDispatch();
    const {loaded, currentPage, typeSort} = useSelector((state) => state.videos);

   /* const getTypeSort = (state) => state.videos.loaded;
    const loading = useSelector(loaded);*/


    useEffect(() => {
        dispatch(loadFilms({currentPage, typeSort}));
    }, [dispatch]);


    return (<>
            <Header/>
            <main>
                <article className='containerHomePage'>
                    { loaded ? <Spinner/> : <MainBody/> }
                </article>
            </main>
        </>
    )
};

export default App;

