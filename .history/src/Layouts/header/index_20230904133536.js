import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container d-flex ">
                <div className='col-md-6'>
                    <img src={logo} alt="logo"></img>
                </div>
                <div className='d-flex justify-content-end'>
                    <div className='me-3'>Trang chủ</div>
                    <div className='me-3'>Giới thiệu</div>
                    <div className='me-3'>Sản phẩm</div>
                    <div className='me-3'>Khuyến mãi</div>
                    <div className=''>Tài khoản</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
