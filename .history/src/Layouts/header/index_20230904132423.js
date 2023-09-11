import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <div className="container-fluid p-0">
            <div className="container m">
                <div>
                    <img src={logo} alt='logo'></img>
                </div>
            </div>
        </div>
    );
}

export default Header;
