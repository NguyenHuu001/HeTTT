import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container d-flex">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='d-flex'>
                    <div className='ms-3'>Trang chủ</div>
                    <div className='ms-3'>Giới thiệu</div>
                    <div className='ms-3'>Sản phẩm</div>
                    <div className=''>Khuyến mãi</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
