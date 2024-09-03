import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const getUserAction = (_data) => {
    return async (dispatch, getState) => {
        const { data } = await axios.post('http://localhost:4000/user/login', _data)
        console.log("!!!")
        console.log(data);
        dispatch({ type: "login", payload: data.user })
    }

}

export const getSignUpAction = (_data) => {
    return async () => {
        //const navigate = useNavigate();
        console.log("2222", _data)
        const { data } = await axios.post('http://localhost:4000/user/signup', _data)
        //navigate('/login');
    }
}