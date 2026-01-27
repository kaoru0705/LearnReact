/*
이 파일의 목적, 우리가 페이지는 만들었으나, 실제적으로 웹페이지의 공통적인 레이아웃을 정한 적은 없다.
*/
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet/> {/* 여기 부분만 페이지별로 교체될 예정 */}
            </main>
            <Footer />
        </div>
    );
}