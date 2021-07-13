import './Error.css'
import {useEffect} from "react";
import {apiErr} from "../../../../store/actions";
import {useDispatch, useSelector} from "react-redux";

const Error = () => {
    const dispatch = useDispatch();
    const { apiError} = useSelector((state) => state.videos);


    useEffect(() => () => dispatch(apiErr(false)), [dispatch]);

    return (   <div className="wrap">
            <div className="logoMistake">
                <h1>404</h1>
                <p> Sorry - File not Found!</p>
                <p> Вернитесь на главную страницу и попробуйте еще раз</p>
            </div>
        </div>
    )
};
export default Error
