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

    // google, naver, kakao 처럼 제공하는 자 provider
    const loginSns = (provider) => {
        // 스프링부트가 내장한, 구글의 로그인 요청 주소
        // http://172.30.1.40:9993/oauth2/authorization/google

        location.href = `http://localhost:9993/oauth2/authorization/${provider}`;

    }
    // onClick={loginSns("Google")}     이건 호출이다.
    // onClick={()=>loginSns("Google")} 
    return (
        <div style={{maxWidth:420, margin:"0 auto"}}>
            <div>
                <h2>로그인</h2>
                <form style={{display:"flex", flexDirection:"column", gap:10}}>
                    <input type="text" placeholder="아이디 입력" className={uiStyles.inputStyle} ref={homepageIdRef}/>
                    <input type="password" placeholder="비밀번호 입력" className={uiStyles.inputStyle} ref={passwordRef}/>
                    <button type="button" onClick={login} className={uiStyles.primaryBtn}>로그인</button>

                    <button type="button" onClick={() => loginSns("google")} className={uiStyles.snsBtn}>Google</button>
                    <button type="button" onClick={() => loginSns("naver")} className={uiStyles.snsBtn}>Naver</button>
                    <button type="button" onClick={() => loginSns("kakao")} className={uiStyles.snsBtn}>Kakao</button>
                </form>

            </div>
        </div>
    );
}