import './Error.css'
import {useEffect} from "react";
import {apiErr} from "../../../../store/actions";
import {useDispatch} from "react-redux";

const Error = () => {
    const dispatch = useDispatch();

    useEffect(() => () => dispatch(apiErr(false)), [dispatch]);

    return (<div className="wrap">
            <div className="logoMistake">
                <h1>404</h1>
                <p> Sorry - File not Found!</p>
                <p> Вернитесь на главную страницу и попробуйте еще раз</p>
            </div>
        </div>
    )
};
export default Error
