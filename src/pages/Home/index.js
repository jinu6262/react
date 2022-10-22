import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <div>메인 페이지 입니다</div>
            <Link to="/todo/123">
                <button>Link 투두로 이동</button>
            </Link>
            <a href="/todo/123">
                <button>a태그 투두로 이동</button>
            </a>

            {/* link 태그를 사용해야하는 이유
                    리엑트는 SPA, CSR이기 때문에 첫 랜더링 때 데이터(html, css, js 리소스)를 모두 받아왔음
                    그러나 a태그를 통해 이동하면 한번 더 데이터를 받아오게 됨
                    따라서 위에 주소를 바꿔주는 용도로만 사용하는 link로 페이지를 이동하는게
                    훨씬 최적화
             */}
        </>
    );
}
export default HomePage;
