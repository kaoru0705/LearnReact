import { useEffect, useState } from "react";

export default function OAuth2Redirect() {
    const [member, setMember] = useState(null);

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
            setMember(data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div style={{maxWidth:720, margin:"40px auto", padding:20}}>
            <h2 style={{marginTop:0}}>OAuth2 로그인 처리 결과</h2>

            <div></div>
            
            {/* member가 참일 경우 출력(rendering 시점이 너무 빠르다. member에 값이 들어가기 전에 렌더링됨) */}
            {member &&
            <div style={{display:"flex", gap:16, alignItems:"center"}}>
                <div>
                    <div>{member.name}</div>
                    <div>{member.email}</div>
                    <div>{member.provider}</div>
                </div>
            </div>
            }

        </div>
    );
}