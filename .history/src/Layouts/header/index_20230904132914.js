import logo from '../../assets/imgs/sv_logo_dashboard.png';
import './header.scss';
function Header() {
    return (
        <header className="container-fluid p-0 py-4">
            <div className="container">
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <ul>
                        
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
