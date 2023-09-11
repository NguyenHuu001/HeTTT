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
            <div className="container aside2 mt-5 d-flex">
                <div className="col-md-3">
                    <div className="aside d-flex justify-content-center align-items-center">
                        <div style={{ textTransform: 'uppercase' }}>Sản phẩm bán chạy</div>
                    </div>
                    <div className="mt-4 d-flex">
                        <div>
                            <img
                                className="item"
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"
                                alt="anh"
                            />
                        </div>
                        <div className="d-flex flex-column flex-wrap">
                            <span className="ms-2 item">Pizza nhân bò phô mai</span>
                            <span className="mt-2 ms-2">340.000đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 d-flex">
                        <div>
                            <img
                                className="item"
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/112.jpg?v=1454040113190"
                                alt="anh"
                            />
                        </div>
                        <div className="d-flex flex-column flex-wrap">
                            <span className="ms-2 item">Pizza gà ớt xanh</span>
                            <span className="mt-2 ms-2">234.000₫</span>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 d-flex">
                        <div>
                            <img
                                className="item"
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/112.jpg?v=1454040113190"
                                alt="anh"
                            />
                        </div>
                        <div className="d-flex flex-column flex-wrap">
                            <span className="ms-2 item">Pizza gà ớt xanh</span>
                            <span className="mt-2 ms-2">234.000₫</span>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 d-flex">
                        <div>
                            <img
                                className="item"
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/112.jpg?v=1454040113190"
                                alt="anh"
                            />
                        </div>
                        <div className="d-flex flex-column flex-wrap">
                            <span className="ms-2 item">Pizza gà ớt xanh</span>
                            <span className="mt-2 ms-2">234.000₫</span>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 d-flex">
                        <div>
                            <img
                                className="item"
                                style={{ width: '70px', height: '70px' }}
                                src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/112.jpg?v=1454040113190"
                                alt="anh"
                            />
                        </div>
                        <div className="d-flex flex-column flex-wrap">
                            <span className="ms-2 item">Pizza gà ớt xanh</span>
                            <span className="mt-2 ms-2">234.000₫</span>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col-md-9 ps-4">
                    <div className="aside d-flex justify-content-center align-items-center">
                        <div style={{ textTransform: 'uppercase' }}>Sản phẩm bán chạy</div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-md-4 ">
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
                        <div className="col-md-4 ">
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
                        <div className="col-md-4 ">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
