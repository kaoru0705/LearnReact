import uiStyles from "../components/ui/Input.module.css";
import {loginRequest} from "../api/auth.js";
import {useRef} from "react";

export default function Login(){
    // Ref 객체 자체에는 값을 대입할 수 없으며, 이 객체가 가진 속성 중 current 안에 데이터를 넣을 수 있음
    const homepageIdRef = useRef(null);    // useRef()로 선언된 대상은 객체이다!!
    const passwordRef = useRef(null);

    // 로그인 요청 메서드 정의
    const login = () => {

        const payload = {
            homepageId: homepageIdRef.current.value,
            password: passwordRef.current.value
        };

        loginRequest(payload);
    }

    return (
        <div style={{maxWidth:420, margin:"0 auto"}}>
            <div>
                <h2>로그인</h2>
                <form style={{display:"flex", flexDirection:"column", gap:10}}>
                    <input type="text" placeholder="아이디 입력" className={uiStyles.inputStyle} ref={homepageIdRef}/>
                    <input type="password" placeholder="비밀번호 입력" className={uiStyles.inputStyle} ref={passwordRef}/>
                    <button type="button" onClick={login} className={uiStyles.primaryBtn}>로그인</button>
                </form>

            </div>
        </div>
    );
}