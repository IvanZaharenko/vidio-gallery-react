import React, {useEffect, useState} from 'react'
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './Login.css'
import {activateAdmin,  userComeIn} from "../../../../store/actions";

const Login = () => {
    const {basaUser} = useSelector((state) => state.videos);
    const dispatch = useDispatch();
    const [authorization, setAuthorization] = useState(false);

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
            errors.comeInPasswordForm = 'Пароль слишком короткий'
        }
        return errors
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    const handleClick = () => {
        if (formik.errors.comeInPasswordForm === undefined && formik.errors.comeInEmailForm === undefined) {
            const user = basaUser.filter(user => user.emailUser === formik.values.comeInEmailForm);
            if (user.length === 0 || user[0].passwordUser !== Number(formik.values.comeInPasswordForm)) {
                alert('No  correct value');
                formik.values.comeInPasswordForm='';
                formik.values.comeInEmailForm=''
            } else {
                setAuthorization(true);
                dispatch(userComeIn(user[0].name));
                if (user[0].name === 'Admin')  {
                    dispatch(activateAdmin(true))
                }
            }
        }
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
                                   name='comeInEmailForm'
                                   className="DisainPlaceholder form_Style_comeIn"
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
                                   className="DisainPlaceholder form_Style_comeIn"
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
                        <Link to={authorization ? '/' : '/login'}>
                            <button
                                type='submit'
                                className='form_button_come_in upComeIn'
                                onClick={handleClick}
                            >
                                Sign
                            </button>
                        </Link>
                        <Link to='registration'>
                            <button type='button' className='registration'>Registration</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Login
