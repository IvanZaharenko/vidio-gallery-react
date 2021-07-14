import React, { useState} from 'react'
import {Form, useFormik, Field, ErrorMessage} from "formik";
import {useHistory} from "react-router-dom";
import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";

import './addNewFilm.css'
import {activateAdmin, addNewFilm, registrationNew, userComeIn} from "../../../../store/actions";


const AddNewFilm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {dataGenre} = useSelector((state) => state.videos);


    const initialValues = {
        title: '123',
        overview: '123456',
        Popularity: '3',
        date: '',
        genre: '',
        VoteAverage: '4',
        VoteCount: '5',
    };

    const handleClick = () => {
        if (formik.errors.title === undefined &&
            formik.errors.overview === undefined &&
            formik.errors.Popularity === undefined &&
            formik.errors.VoteAverage === undefined &&
            formik.errors.VoteCount === undefined) {

            const newFilm = {
                id: nanoid(5),
                poster_path: null,
                title: formik.values.title,
                overview: formik.values.overview,
                popularity: Number(formik.values.Popularity),
                release_date: formik.values.date,
                genre: [],
                vote_average: Number(formik.values.VoteAverage),
                vote_count: Number(formik.values.VoteCount),
            }
            dispatch(addNewFilm(newFilm));
            history.push('/');

            console.log(newFilm)
        } else alert('No  correct value');



        /*

   /*  else {
             dispatch(userComeIn(user[0].name));
             if (user[0].name === 'Admin')  {
                 dispatch(activateAdmin(true))
             }
         }*/


    };

    const onSubmit = (values, {resetForm}) => {


    };

   /* const validationSchema = Yup.object({
        title: Yup.string()
            .test('len', 'Не менее 3 символов', val => val.length === 4)
            .required('Заполните поле'),
        /!*Overview: Yup.string()
            .test('len', 'Не менее 5 символов', val => val.length === 4)
            .required('Заполните поле'),
        Popularity: Yup.string()
            .test('len', 'Не менее  4 символов', val => val.length === 4)
            .required('Заполните поле'),
        date: Yup.string()
            .required('Заполните поле'),
        VoteAverage: Yup.string()
            .max(10, 'до 10')
            .required('Заполните поле'),
        VoteCount: Yup.string()
            .required('Заполните поле'),*!/
    });*/

    const validate = values => {
        let errors = {};

        if (!values.title) {
            errors.title = 'Заполните поле'
        } else if(values.title.length < 3) {
            errors.title = 'Не менее 3 символов'
        }

        if (!values.overview) {
            errors.overview = 'Заполните поле'
        } else if(values.overview.length <6) {
            errors.overview = 'Не менее 6 символов'
        }

        if (!values.Popularity) {
            errors.Popularity = 'Заполните поле'
        }

        if (!values.genre) {
            errors.genre = 'Заполните поле'
        }

        if (!values.VoteAverage) {
            errors.VoteAverage = 'Заполните поле'
        }
        if (!values.VoteCount) {
            errors.VoteCount = 'Заполните поле'
        }

        return errors
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (<div className="container_come-in">
            <div className='formWrapper'>
                <h2>Add new film</h2>
                <div>
                    <form onSubmit={formik.handleSubmit}
                          action="#"
                          method='get'>
                        <div>

                            <div>
                                <input
                                    type='text'
                                    placeholder='title'
                                    name='title'
                                    className="DisainPlaceholder form_Style marg20px"
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.title && formik.errors.title ?
                                    <div className='err'>{formik.errors.title} </div> :
                                    null}
                            </div>

                            <div>
                                <input
                                    type='text'
                                    placeholder='Overview'
                                    name='overview'
                                    className="DisainPlaceholder form_Style marg20px"
                                    onChange={formik.handleChange}
                                    value={formik.values.overview}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.overview && formik.errors.overview ?
                                    <div className='err'>{formik.errors.overview} </div> :
                                    null}
                            </div>

                            <div>
                                <input
                                    type='number'
                                    placeholder='Popularity'
                                    name='Popularity'
                                    className="DisainPlaceholder form_Style marg20px"
                                    onChange={formik.handleChange}
                                    value={formik.values.Popularity}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.Popularity && formik.errors.Popularity ?
                                    <div className='err'>{formik.errors.Popularity} </div> :
                                    null}
                            </div>

                            <div>
                                <input
                                    type='date'
                                    placeholder='date'
                                    name='date'
                                    className="DisainPlaceholder form_Style marg20px"

                                />

                            </div>

                            <div>
                                <select
                                    name='genre'
                                    className="addGenres"
                                    multiple
                                    size="1"

                                >
                                    {
                                        dataGenre.map((genre) => {
                                            return <option
                                                value={genre.name}
                                                key={genre.id}>
                                                {genre.name}
                                            </option>
                                        })
                                    }
                                </select>
                                {formik.touched.genre && formik.errors.genre ?
                                    <div className='err'>{formik.errors.date} </div> :
                                    null}
                            </div>

                            <div>
                                <input
                                    type='number'
                                    placeholder='Vote average'
                                    name='VoteAverage'
                                    className="DisainPlaceholder form_Style marg20px"
                                    onChange={formik.handleChange}
                                    value={formik.values.VoteAverage}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.VoteAverage && formik.errors.VoteAverage ?
                                    <div className='err'>{formik.errors.VoteAverage} </div> :
                                    null}
                            </div>

                            <div>
                                <input
                                    type='number'
                                    placeholder='Vote count'
                                    name='VoteCount'
                                    className="DisainPlaceholder form_Style marg20px"
                                    onChange={formik.handleChange}
                                    value={formik.values.VoteCount}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.VoteCount && formik.errors.VoteCount ?
                                    <div className='err'>{formik.errors.VoteCount} </div> :
                                    null}
                            </div>
                            {/*


                            */}
                        </div>

                        <div className='control_btn'>

                            <button className='form_button_come_in upRegistrtion'
                                    type='submit'
                                    onClick={handleClick}
                            >
                                Add
                            </button>

                            <button className='clear-newFilm'
                                    type='reset'
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
};
export default AddNewFilm
