import { Route, Router, Routes } from "react-router-dom";
import Main from "./page/main/Main";
import SignUp from "./page/signup/SignUp";
import Login from "./page/login/Login";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
