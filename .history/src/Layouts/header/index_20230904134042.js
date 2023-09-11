import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <div className="me-4 fs-5 fst-mormal h">Trang chủ</div>
                    <div className="me-4 fs-5 fst-mormal h">Giới thiệu</div>
                    <div className="me-4 fs-5 fst-mormal h">Sản phẩm</div>
                    <div className="me-4 fs-5 fst-mormal h">Khuyến mãi</div>
                    <div className="fs-5 fst-mormal h">Tài khoản</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
