import logo from '../../assets/imgs/sv_logo_dashboard.png';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const name = localStorage.getItem('userName');
    const countDish = localStorage.getItem('coutnDish');
    const navigate = useNavigate();
    const [blur, setBlur] = useState(false);
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setUserName(name);
        setBlur(false);
    }, [name]);

    const ClickLogOut = () => {
        localStorage.clear('userName');
        navigate('/login');
        notification.open({
            type: 'success',
            message: 'Đăng xuất thành công',
            description: '',
            duration: 2,
        });
    };
    const ClickBlur = () => {
        setBlur(!blur);
    };
    return (
        <header className="container-fluid ps-0 py-4 header">
            <div className="container d-flex justify-content-between">
                <div className="">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="me-4 fs-5 fst-mormal header_hover">Trang chủ</div>
                    </Link>
                    <div className="me-4 fs-5 fst-mormal header_hover">Giới thiệu</div>
                    <Link to="/product" style={{ textDecoration: 'none', color: 'black' }}>
                        <div className="me-4 fs-5 fst-mormal header_hover">Sản phẩm</div>
                    </Link>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                    {userName ? (
                        <>
                            <Link to="/cart">
                                <div className="me-4 cart_icon">
                                    <FontAwesomeIcon icon={faCartShopping} size="2xl" />
                                    <span className="count_item_cart">{countDish}</span>
                                </div>
                            </Link>
                            <div>
                                <span className="fw-bolder wrap_user" onClick={ClickBlur}>
                                    {userName}
                                </span>
                                {blur && (
                                    <p className="log_out mt-3 fw-normal" onClick={ClickLogOut}>
                                        Đăng xuất
                                    </p>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="fs-5 fst-mormal header_hover">
                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                Đăng nhập
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
