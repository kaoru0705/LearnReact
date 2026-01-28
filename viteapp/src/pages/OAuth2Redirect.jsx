import { useEffect } from "react";

export default function OAuth2Redirect() {

    /*
        1) 컴포넌트가 렌더링 될 때
        2) 감시 대상 데이터가 변경 시
    */
    useEffect(() => {
        // sns로그인에 성공된 직후이므로, 서버측에서는 세션이 아직 존재할 것이므로, 곧바로 사용자 정보를 요청하자
        fetch("http://localhost:9993/api/me", {
            method: "GET",
            credentials: "include"  // SESSIONID 쿠키 포함시킴
        })
        .then(res => {
            if(!res.ok) throw new Error("에러 발생");
            return res.json();
        })
        .then(data => {
            console.log("서버에서 가져온 사용자 정보는 ", data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div style={{maxWidth:720, margin:"40px auto", padding:20}}>
            <h2 style={{marginTop:0}}>OAuth2 로그인 처리 결과</h2>

            <div></div>

            <div style={{display:"flex", gap:16, alignItems:"center"}}>
                <div>
                    <div>회원명</div>
                    <div>이메일</div>
                    <div>프로바이더명</div>
                </div>
            </div>

        </div>
    );
}