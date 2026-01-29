import { useRef, useState } from 'react'
import './App.css'

function App() {
  
  const homepageIdRef = useRef(null);
  const passwordRef = useRef(null);

  /*-------------------------------------------
    로그인 요청
  -------------------------------------------*/
  const login = () => {

    const homepageId = homepageIdRef.current.value;
    const password = passwordRef.current.value;

    const payload = {
      homepageId : homepageId,
      password : password
    }

    fetch("http://localhost:9994/api/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(res => {
      if(!res.ok) throw new Error("에러");
      return res.json();
    })
    .then(data => {
      console.log("서버에서 가져온 데이터는 ", data);
    })
    .catch(err => console.log(err));

  }

  return (
    <div style={{maxWidth: 420, margin: "40px auto", padding: 16}}>
      <h2 style={{marginTop: 0}}>JWT 로그인 폼</h2>

      <form style={{display: "grid", gap: 10}}>
        <input type="text" placeholder="아이디 입력" ref={homepageIdRef}/>
        <input type="text" placeholder="비밀번호 입력" ref={passwordRef}/>

        <button type="button" style={{border:"1px solid #ddd"}} onClick={login}>로그인</button>
      </form>

      <div>
        <div>
          <b>Access Token</b><br/>
          발급받은 토큰 나올 예정..
        </div>
        <button type="button" style={{border:"1px solid #ddd"}}>로그아웃</button>
      </div>
    </div>
  )
}

export default App
