import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

// '페이지 이동'을 구현하기 위한 표준 라이브러리
export default function Header() {
    return (
        <header className={styles.headerStyle}>
            <div>My App</div>
            <nav>
                <NavLink to="/" end>메인</NavLink>
                <NavLink to="/signup">회원가입</NavLink>
                <NavLink to="/login">로그인</NavLink>
            </nav>
        </header>
    );
}