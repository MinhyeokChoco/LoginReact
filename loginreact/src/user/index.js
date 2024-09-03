import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { reducer } from '../reducer';

// 유저 정보를 전역 상태에서 관리, 어디에서나 로그인 할 수 있게 하기 위함
export const userInfo = createStore(reducer, applyMiddleware(thunk));
