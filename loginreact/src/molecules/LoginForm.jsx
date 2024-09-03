import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Button } from '../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { getUserAction } from '../action';

const Form = () => {

    const uid = useSelector(state => state.uid)
    const upw = useSelector(state => state.upw)
    const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(login) return;
    // }, [login])

    // login.isLogin

    const uidInput = useRef(null);
    const upwInput = useRef(null);

    const navigate = useNavigate();

    const handlerLogin = (e) => {
        const uid = uidInput.current.value
        const upw = upwInput.current.value
        console.log(uid);
        if (e.target.innerText === '로그인') {
            // dispatch({ type: 'login', payload: { uid, upw } })
            dispatch(getUserAction({ uid, upw }))
            navigate('/')
        } else if (e.target.innerText === 'logout') {
            dispatch({ type: 'logout', payload: {} })
            navigate('/')
        }
    }
    useEffect(() => {
        console.log(uid)
    }, [uid])
    return <>
        <Label htmlFor="uid">아이디</Label>
        <Input type='text' ref={uidInput} />
        <Label htmlFor="upw">비밀번호</Label>
        <input type="password" ref={upwInput} />
        <Button onClick={handlerLogin}>로그인</Button>
    </>

}

export default Form;