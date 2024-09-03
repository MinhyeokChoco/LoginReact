const initialState = {
    uid: '',
    upw: '',
    lsLogin: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(type);
    switch (type) {
        case "login":
            return {
                ...state,
                uid: payload.uid,
                // upw: payload.upw,
                lsLogin: true
            }
        case "logout":
            return {
                ...state,
                uid: '',
                upw: '',
                lsLogin: false
            }
        default:
            return state;
    }
}

export default reducer;

// payload : 유저들이 유저 정보를 로그인 하기 위해 입력하는 동적값
// reducer의 기능은 어떠한 값으로 상태를 변화할 것인지에 대해 작성해서 사용하는 목적
// payload에 즉 axios.get으로 백서버에서 받은 유저 데이터를 const data에 담아서 payload 매개변수에 인자 값으로 던져주면 됨