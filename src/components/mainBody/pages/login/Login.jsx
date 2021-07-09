import React, {useState} from 'react'
import {useFormik} from "formik";
import './Login.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {} from "../../../../store/actions";
import {userComeIn} from "../../../../store/actions";

const Login = () => {
    const {basaUser} = useSelector((state) => state.videos);
    const dispatch = useDispatch();
    const [admin, setAdmin] = useState(false);


    const initialValues = {
        comeInEmailForm: '',
        comeInPasswordForm: '',
    };
    const onSubmit = values => {

    };
    const validate = values => {
        let errors = {};
        if (!values.comeInEmailForm) {
            errors.comeInEmailForm = 'Заполните поле'
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(values.comeInEmailForm)){
            errors.comeInEmailForm = 'Нверный формат поля'
        }

        if (!values.comeInPasswordForm) {
            errors.comeInPasswordForm = 'Заполните поле'
        } else if (values.comeInPasswordForm.length <= 3){
            errors.comeInPasswordForm = 'Пароль слишком простой'
        }
        return errors
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });


    const handleClick = () => {
        // if (Object.keys(formik.errors).length !== 0  ) console.log(formik.errors )
        console.log(basaUser);


        if (formik.values.comeInEmailForm === 'admin@tut.by') setAdmin(!admin);
        dispatch(userComeIn({
            user: formik.values.comeInEmailForm,
            password: formik.values.comeInEmailForm,
            adminMode: admin
        }))


    };

    return (
        <div className='container_come-in'>
            <div className='formWrapper'>
                <form
                    onSubmit={formik.handleSubmit}
                    action="#"
                    method='get'
                    name="comeInForm"
                >
                    <div>
                        <div>
                            <input type="email"
                                   placeholder="Email"
                                   autoFocus
                                   name='comeInEmailForm'
                                   className="DisainPlaceholder form_Style"
                                   onChange={formik.handleChange}
                                   value={formik.values.comeInEmailForm}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.comeInEmailForm && formik.errors.comeInEmailForm ?
                                <div className='err'>{formik.errors.comeInEmailForm} </div> :
                                <label
                                    className="controlLabel"
                                    htmlFor="comeInEmailForm">Введите Email
                                </label>}

                        </div>
                        <div>
                            <input type="password"
                                   placeholder="Password"
                                   className="DisainPlaceholder form_Style"
                                   name='comeInPasswordForm'
                                   onChange={formik.handleChange}
                                   value={formik.values.comeInPasswordForm}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.comeInPasswordForm && formik.errors.comeInPasswordForm ?
                                <div className='err'>{formik.errors.comeInPasswordForm} </div> :
                                <label
                                    className="controlLabel"
                                    htmlFor="comeInPasswordForm"> Введите пароль
                                </label>}

                        </div>
                    </div>
                    <div className='control_btn'>

                                <button
                                    type='submit'
                                    className='form_button_come_in upComeIn'
                                    onClick={handleClick}
                                >
                                    Sign
                                </button>


                        <button type='button' className='registration'>Registration</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Login
