import './sidebar.scss';
function sidebar() {
    return (
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
            <div className="mt-4">
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
        </div>
    );
}

export default sidebar;
