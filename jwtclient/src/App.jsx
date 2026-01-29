import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{maxWidth: 420, margin: "40px auto", padding: 16}}>
      <h2 style={{marginTop: 0}}>JWT 로그인 폼</h2>

      <form style={{display: "grid", gap: 10}}>
        <input type="text" placeholder="아이디 입력"/>
        <input type="text" placeholder="비밀번호 입력"/>

        <button type="button" style={{border:"1px solid #ddd"}}>로그인</button>
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
