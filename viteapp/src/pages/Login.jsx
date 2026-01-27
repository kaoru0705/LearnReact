import uiStyles from "../components/ui/Input.module.css";

export default function Login(){
    return (
        <div style={{maxWidth:420, margin:"0 auto"}}>
            <div>
                <h2>로그인</h2>
                <form style={{display:"flex", flexDirection:"column", gap:10}}>
                    <input type="text"          placeholder="아이디 입력"       className={uiStyles.inputStyle} />
                    <input type="password"  placeholder="비밀번호 입력"     className={uiStyles.inputStyle}/>
                    <button type="button" className={uiStyles.primaryBtn}>로그인</button>
                </form>

            </div>
        </div>
    );
}