import './product.scss';
import SiderBarr from '../../Layouts/sidebar';
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { fetchDish } from '../../services/restaurant_services';
function Product() {
    const [dish, setDish] = useState([]);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    useEffect(() => {
        getDish();
    }, []);
    const getDish = () => {
        try {
            const response = fetchDish().then((res) => {
                setDish(res);
                console.log(res);
            });
        } catch (error) {
            console.log('Lỗi');
        }
    };
    return (
        <div>
            <div className="banner_product">
                <span className="titlesp">Tất cả sản phẩm</span>
                <img
                    style={{ height: '250px', objectFit: 'cover' }}
                    src="https://bizweb.dktcdn.net/100/053/643/themes/877493/assets/sub-banner-top.jpg?1662429924636"
                    alt=""
                />
            </div>
            <div className="container mt-4">
                <div className="row">
                    <SiderBarr />
                    <div className="col-md-9">
                        <div className="ps-4">
                            <div className="d-flex align-items-center col-md-12">
                                <span>Sắp xếp:</span>
                                <Select
                                    className="ms-3"
                                    defaultValue="Mặc định"
                                    style={{
                                        width: 200,
                                    }}
                                    // onChange={handleChange}
                                    options={[
                                        {
                                            label: 'Sắp xếp',
                                            options: [
                                                {
                                                    label: 'Giảm dần',
                                                    value: '1',
                                                },
                                                {
                                                    label: 'Tăng dần',
                                                    value: '2',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </div>
                            <div className="d-flex flex-wrap">
                                {dish &&
                                    dish.map((item) => (
                                        <div className="col-md-4 ps-3" key={item[0]}>
                                            <div>
                                                <img
                                                    src="https://bizweb.dktcdn.net/thumb/large/100/053/643/products/1.jpg?v=1454064638327"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex flex-column align-items-center">
                                                <span className="">{item}đ</span>
                                                <span className="mt-3 item">{item.tenMonAn}</span>
                                            </div>
                                            <div className="d-flex justify-content-center mt-4">
                                                <button className="btn_buy px-4 py-2">Thêm</button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
