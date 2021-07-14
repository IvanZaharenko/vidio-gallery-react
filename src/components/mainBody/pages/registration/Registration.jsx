import React from 'react'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'


import './registration.css'
import {registrationNew} from "../../../../store/actions";

const Registration = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const initialValues = {
        registrationName: '',
        registrationSurName: '',
        registrationPassword: '',
        registrationConfirmPassword: '',
        registrationEmail: '',
    };
    const onSubmit = (values, {resetForm}) => {
        const newUser = {
            emailUser: values.registrationEmail,
            passwordUser: values.registrationPassword,
            name: values.registrationName,
            surname: values.registrationSurName
        };

        resetForm({
            values: {
                registrationName: '',
                registrationSurName: '',
                registrationPassword: '',
                registrationConfirmPassword: '',
                registrationEmail: '',
            }
        });
        dispatch(registrationNew(newUser));
        history.push('/');
    };
    const validationSchema = Yup.object({
        registrationName: Yup.string()
            .required('Заполните поле'),
        registrationSurName: Yup.string()
            .required('Заполните поле'),
        registrationPassword: Yup.string()
            .min(4, 'Более 4 символов')
            .required('Заполните поле'),
        registrationConfirmPassword: Yup.string()
            .oneOf([Yup.ref('registrationPassword'), ''], 'Пароли не совпадают')
            .required('Заполните поле'),
        registrationEmail: Yup.string()
            .email('Неврный формат поля')
            .required('Заполните поле'),
    });

    return (<div className="container_come-in">
            <div className='formWrapper'>
                <h2>Registration</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    <Form>
                        <div>
                            <div>
                                <label
                                    className='controlLabel'
                                    htmlFor='registrationName'
                                >Введите ваше имя
                                </label>
                                <Field
                                    type='text'
                                    placeholder='Name'
                                    name='registrationName'
                                    className="DisainPlaceholder form_Style"
                                />
                                <ErrorMessage name='registrationName'>
                                    {errorMsg => <div className={'errReg'}> {errorMsg}</div>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <label
                                    className='controlLabel'
                                    htmlFor='registrationSurName'
                                >Введите ваше второе имя</label>
                                <Field
                                    type='text'
                                    placeholder='Surname'
                                    name='registrationSurName'
                                    className="DisainPlaceholder form_Style"
                                />
                                <ErrorMessage name='registrationSurName'>
                                    {errorMsg => <div className={'errReg'}> {errorMsg}</div>}
                                </ErrorMessage>

                            </div>
                            <div>
                                <label
                                    className='controlLabel'
                                    htmlFor='Password'
                                >Введите ваш пароль</label>
                                <Field
                                    type='password'
                                    placeholder='Password'
                                    name='registrationPassword'
                                    className="DisainPlaceholder form_Style"
                                />
                                <ErrorMessage name='registrationPassword'>
                                    {errorMsg => <div className={'errReg'}> {errorMsg}</div>}
                                </ErrorMessage>

                            </div>
                            <div>
                                <label
                                    className='controlLabel'
                                    htmlFor='registrationConfirmPassword'
                                >Повторите ваш пароль</label>
                                <Field
                                    type='password'
                                    placeholder='Confirm password'
                                    name='registrationConfirmPassword'
                                    className="DisainPlaceholder form_Style"
                                />
                                <ErrorMessage name='registrationConfirmPassword'>
                                    {errorMsg => <div className={'errReg'}> {errorMsg}</div>}
                                </ErrorMessage>
                            </div>
                            <div>
                                <label
                                    className='controlLabel'
                                    htmlFor='registrationEmail'
                                >Введите ваш Email</label>
                                <Field
                                    type='email'
                                    placeholder='Email'
                                    name='registrationEmail'
                                    className="DisainPlaceholder form_Style"
                                />
                                <ErrorMessage name='registrationEmail'>
                                    {errorMsg => <div className={'errReg'}> {errorMsg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className='control_btn'>
                            <button className='form_button_come_in upRegistrtion'
                                    type='submit'
                            >
                                Sign Up
                            </button>
                            <button className='registration'
                                    type='reset'
                            >
                                Clear
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>

    )
};

export default Registration
