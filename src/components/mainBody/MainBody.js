import './MainBody.css'
import React from 'react'
import {useDispatch} from "react-redux";
import {useState} from 'react'
import {form} from "../../store/actions";
import {useSelector} from "react-redux";
import {Sort} from "./sort/Sort";

const MainBody = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const getTasks = (state) => state.videos;
    const task = useSelector(getTasks);

    const handle = (event) => {
        event.preventDefault();
        dispatch(form(value));
        console.log(task);
        setValue('')
    };
    const change = ({target}) => {
        setValue(target.value)
    };

    return (
        <main>
            <Sort/>
            <form onSubmit={handle}>
                <input type="text" onChange={change} value={value}/>
                <button>+</button>
            </form>
        </main>
    )
};
export default MainBody
