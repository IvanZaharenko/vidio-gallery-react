import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, useParams} from 'react-router-dom'

import {changeLoad, loadFilmPage, loadFilms} from "../../store/actions";

import './app.css'
import Header from "../header/Header";
import MainBody from "../mainBody/MainBody";
import AboutFilm from "./../mainBody/pages/aboutFilm/AboutFilm"
import Login from "../mainBody/pages/login/Login";
import Error from "../mainBody/pages/error/Error";
import Spinner from "../spinner/Spinner";
import Registration from "../mainBody/pages/registration/Registration";
import AddNewFilm from "../mainBody/pages/addNewFilm/AddNewFilm";



const App = () => {
    const dispatch = useDispatch();
    const {loaded, currentPage, typeSort, aboutFilm, apiError} = useSelector((state) => state.videos);


    useEffect(() => {
        dispatch(loadFilms({currentPage, typeSort}));
    }, [dispatch]);

    return (<>
            <Header/>
            <main>
                <article className='containerHomePage'>
                    <Switch>

                        <Route path="/" exact >
                            <MainBody />
                        </Route>

                        <Route path="/description/:filmId" exact render={({match}) => {
                            const {filmId} = match.params;
                           return apiError ? <Error/> : <AboutFilm idFilm={filmId}/>
                        }}>

                        </Route>

                        <Route path="/login" exact>
                            <Login/>
                        </Route>

                        <Route path="/registration" exact>
                            <Registration/>
                        </Route>

                        <Route path="/newFilm" exact>
                            <AddNewFilm/>
                        </Route>

                        <Error/>

                    </Switch>
                </article>
            </main>
        </>
    )
};

export default App;

