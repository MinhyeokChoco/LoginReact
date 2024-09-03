import React from 'react'
import Header from '../Header';

const Main = () => {
  return (
    <div>
      <Header />
      {/* 헤더랑 바디 넣어야 할 것 같은데 ..
      // 그리고 헤더는 그대로 놔두고 로그인이랑 회원가입을 바디에 넣어주면 되지 않을까 .. ? */}
    </div>
  )
}

export default Main;

// 로그인이랑 회원가입 페이지 나누고
// 메인페이지에는 헤더 바디 푸터로 바디에는 로그인 화면으로 갈 수 있게 네비게이트 해주고
// 헤더에는 홈 회원가입 로그인
// 로그인 되면 홈 마이페이지 로그아웃