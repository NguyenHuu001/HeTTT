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
            <div className="container aside2 mt-3">
                <div className="col-md-3">
                    <div className="aside d-flex justify-content-center align-items-center">
                        <div style={{ textTransform: 'uppercase' }}>Danh mục sản phẩm </div>
                    </div>
                    <div className="mt-4">
                        <div className="item">Sản phẩm mới</div>
                        <hr />
                        <div className="item">Sản phẩm khuyến mãi</div>
                        <hr />
                        <div className="item">Sản phẩm nổi bật</div>
                    </div>
                </div>
                <div className="col-md-9"></div>
            </div>
            <div className="container aside2 mt-5">
                <div className="col-md-3">
                    <div className="aside d-flex justify-content-center align-items-center">
                        <div style={{ textTransform: 'uppercase' }}>Sản phẩm bán chạy</div>
                    </div>
                    <div className="mt-4">
                        <div>
                            <img
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"
                                alt="anh"
                            />
                        </div>
                        <div>
                            <div>Pizza nhân bò phô mai</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-9"></div>
            </div>
        </div>
    );
}

export default Home;
