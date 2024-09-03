import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Button } from '../atoms/Button';
import { getSignUpAction } from '../action';

const Form = () => {

    const state = useSelector(state => state);
    const uid = useSelector(state => state.uid);
    const upw = useSelector(state => state.upw);
    const uname = useSelector(state => state.uname);
    const uphone = useSelector(state => state.uphone);
    console.log(state);
    // state.reducer.isLogin
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const uidInput = useRef(null);
    const upwInput = useRef(null);
    const unameInput = useRef(null);
    const uphoneInput = useRef(null);
    // const isLogin = useRef(false);

    const handlerSignUp = (e) => {
        const uid = uidInput.current.value
        const upw = upwInput.current.value
        const uname = unameInput.current.value
        const uphone = uphoneInput.current.value
        // const isLogin = isLogin.current.value

        if (e.target.innerText === '회원가입') {
            // dispatch({ type: "회원가입", payload: { uid, upw, uname, uphone } })
            dispatch(getSignUpAction({ uid, upw, uname, uphone }));
            navigate('/login');
        } else {
            console.log("1234")
        }
    }

    useEffect(() => {
        console.log(state);
    }, [state])

    return <>
        <Label htmlFor="uid">아이디</Label>
        <Input type='text' ref={uidInput} />
        <Label htmlFor="upw">비밀번호</Label>
        <Input type="password" ref={upwInput} />
        <Label htmlFor="uname">닉네임</Label>
        <Input type='text' ref={unameInput} />
        <Label htmlFor="uphone">휴대폰</Label>
        <Input type="text" ref={uphoneInput} />
        <Button onClick={handlerSignUp}>회원가입</Button>
    </>
};

export default Form;
