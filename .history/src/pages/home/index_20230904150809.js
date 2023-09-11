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
            <div className="mt-4 container d-flex">
                <div className="col-md-4">
                    <img className="bnner pe-3" src={banner1} alt="banner"></img>
                </div>
                <div className="col-md-8">
                    <img style={{ height: '100%' }} className="bnner ps-3" src={banner2} alt="banner"></img>
                </div>
            </div>
            <div className="container aside2 mt-5">
                <div className="col-md-4">
                    <div className="aside">
                        <div></div>
                    </div>
                    <div>Sản phẩm mới</div>
                    <div>Sản phẩm khuyến mãi</div>
                    <div>Sản phẩm nổi bật</div>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
    );
}

export default Home;
