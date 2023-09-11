import './home.scss';
import banner from '../../assets/imgs/baner_home.png';
import banner1 from '../../assets/imgs/banner-3.png';
import banner2 from '../../assets/imgs/banner-4.png';
function Home() {
    return (
        <div>
            <div className="container-fluid p-0">
                <img style={{ width: '100%' }} src={banner} alt="banner"></img>
            </div>
            <div className="mt-4 container d-flex bnner">
                <div className="col-md-4">
                    <img style={{ width: '100%', height: '100%' }} src={banner1} alt="banner"></img>
                </div>
                <div className="col-md-8">
                    <img style={{ width: '100%', height: '100%' }} src={banner2} alt="banner"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
