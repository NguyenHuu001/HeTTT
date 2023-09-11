import './home.scss';
import banner from '../../assets/imgs/baner_home.png';
import banner1 from '../../assets/imgs/banner-3.png';
import banner2 from '../../assets/imgs/banner-4.png';
import SiderBarr from '../../Layouts/sidebar';
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
            <div className="container aside2 mt-3 d-flex">
                <SiderBarr />
                <div className="col-md-9">
                    <div className="ps-4">
                        <div className="aside d-flex justify-content-center align-items-center">
                            <div style={{ textTransform: 'uppercase' }}>Sản phẩm bán chạy</div>
                        </div>
                        <div className="d-flex">
                            <div className="col-md-4 ps-3">
                                <div>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <span className="">340.000đ</span>
                                    <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button className="btn_buy px-4 py-2">Thêm</button>
                                </div>
                            </div>
                            <div className="col-md-4 ps-3">
                                <div>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/112.jpg?v=1454040113190"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <span className="">340.000đ</span>
                                    <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button className="btn_buy px-4 py-2">Thêm</button>
                                </div>
                            </div>
                            <div className="col-md-4 ps-3">
                                <div>
                                    <img
                                        src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/113.jpg?v=1454040266683"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <span className="">340.000đ</span>
                                    <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button className="btn_buy px-4 py-2">Thêm</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4" style={{ overflow: 'hidden' }}>
                            <img
                                className="img_hover"
                                style={{ width: '100%' }}
                                src="https://bizweb.dktcdn.net/100/053/643/themes/877493/assets/mid-banner.jpg?1676015641182"
                                alt=""
                            />
                        </div>
                        <div className="mt-4">
                            <div className="aside d-flex justify-content-center align-items-center">
                                <div style={{ textTransform: 'uppercase' }}>Sản phẩm mới</div>
                            </div>
                            <div className="d-flex">
                                <div className="col-md-4 ps-3">
                                    <div>
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/6.jpg?v=1454130202917"
                                            alt=""
                                        />
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="">340.000đ</span>
                                        <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn_buy px-4 py-2">Thêm</button>
                                    </div>
                                </div>
                                <div className="col-md-4 ps-3">
                                    <div>
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/119.jpg?v=1454043355450"
                                            alt=""
                                        />
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="">340.000đ</span>
                                        <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn_buy px-4 py-2">Thêm</button>
                                    </div>
                                </div>
                                <div className="col-md-4 ps-3">
                                    <div>
                                        <img
                                            src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/115.jpg?v=1454040800297"
                                            alt=""
                                        />
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="">340.000đ</span>
                                        <span className="mt-3 item">Pizza nhân bò phô mai</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button className="btn_buy px-4 py-2">Thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container aside2 mt-5 d-flex"></div>
        </div>
    );
}

export default Home;
