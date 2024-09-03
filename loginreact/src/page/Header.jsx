import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms/Button';
import { useSelector } from 'react-redux';

const Header = () => {
    const uid = useSelector(state => state)
    const navigate = useNavigate();

    const handlerNavigation = (path) => {
        navigate(path);
    };

    useEffect(() => {
        console.log(uid)
    }, [uid])

    return (
        <header>
            <Button onClick={() => handlerNavigation('/')}>홈</Button>
            <Button onClick={() => handlerNavigation('/signup')}>회원가입</Button>
            <Button onClick={() => handlerNavigation('/login')}>로그인</Button>
        </header>
    );
};

export default Header;
