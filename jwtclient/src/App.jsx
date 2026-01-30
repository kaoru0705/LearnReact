import { useRef, useState } from 'react'
import './App.css'

function App() {
  
  const homepageIdRef = useRef(null);
  const passwordRef = useRef(null);

  const [token, setToken] = useState("");

  /*-------------------------------------------
    로그인 요청
  -------------------------------------------*/
  const login = () => {

    const homepageId = homepageIdRef.current.value;
    const password = passwordRef.current.value;

    const payload = {
      homepageId : homepageId,
      password : password
    };

    // const params = new URLSearchParams();
    // params.append("homepageId", homepageId);
    // params.append("password", password);

    // fetch("http://localhost:9994/api/auth/login", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/x-www-form-urlencoded"},
    //   body: params
    // })
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
      /*----------------------------------------------------------
      localStorage 란?
      1) 브라우저가 제공하는 클라이언트 측 영구 저장소
      2) 저장 데이터 - 문자열 데이터만 약 최대 5MB
      3) 사용방법
          저장하기 : localStorage.setItem("fruit", "apple");
          가져오기 : localStorage.getItem("fruit");
      4) 쿠키와 차이점
        쿠키는 무조건 서버로 자동 전송 (storage와 가장 큰 차이점)
        쿠키는 최대 약 4kb 를 저장
      
      5) localStorage는 자바스크립트로 접근이 가능하므로, 보안이 취약..
      ----------------------------------------------------------*/
      localStorage.setItem("accessToken", data.accessToken);
      setToken(data.accessToken);
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
    {/*
      A && B

      A가 false이면 뒤는 판단할 필요가 없으므로 A 반환
      A가 true이면 뒤에까지 판단해봐야 하므로 B 반환
    */}

      <div>
        {token && (
          <div>
            <b>Access Token</b><br/>
            {token}
          </div>
          )
        }
        <button type="button" style={{border:"1px solid #ddd"}}>로그아웃</button>
      </div>

    </div>
  )
}

export default App
