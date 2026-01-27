const BASE_URL = "http://localhost:9993/api/auth";  // Spring 서버 주소

/*---------------------------------------
    로그인 요청
    payload는 js객체 리터럴 ex) {homepageId, password}
---------------------------------------*/
export function loginRequestWithJson(payload) {
    alert("비동기 로그인 요청할 예정");

    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        credentials: "include", /* 비동기 방식에서는 개발자가 요청 시 쿠키를 포함하여 전송함을 선언 */
        body: JSON.stringify(payload)
    })
    .then(res => {
        if(!res.ok) throw new Error("로그인 에러");
        return res.json();  // Promise를 반환하면서 동시에 resolve(json 문자열을 파싱한 객체) 호출
    })
    .then(data => {
        console.log("로그인 결과 사용자 정보는 ", data);
    })
    .catch(err => console.log(err))
    ;
}

/*---------------------------------------
    로그인 요청 (JSON 문자열 전송이 아닌 폼 방식)
---------------------------------------*/
export function loginRequest(payload) {
    const params = new URLSearchParams();
    params.append("homepageId", payload.homepageId);
    params.append("password", payload.password);

    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        credentials: "include",
        body: params.toString()
    })
    .then(res => {
        if(!res.ok) throw new Error("로그인 에러");
        return res.json();  // Promise를 반환하면서 동시에 resolve(json 문자열을 파싱한 객체) 호출
    })
    .then(data => {
        console.log("로그인 결과 사용자 정보는 ", data);
    })
    .catch(err => console.log(err))
    ;
}