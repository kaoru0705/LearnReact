import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  /*
    StrictMode란? 개발모드에서만 동작하는 잠재적 문제를 미리 잡아두는 검사 도구
    잠재적 문제? deprecated API, 오래된 LifeCycle 메서드, 잘못된 위치의 side-effect 등
    UI 영향을 주지 않으며 실제 운영환경에서는 완전히 제거됨(개발자가 별도로 제거할 필요 없음)
  */
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)