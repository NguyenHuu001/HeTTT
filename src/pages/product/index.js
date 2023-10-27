import './product.scss';
import SiderBarr from '../../Layouts/sidebar';
import React, { useEffect, useState } from 'react';
import { Select, message } from 'antd';
import { fetchDish, AddtoCart, DeleteDish } from '../../services/restaurant_services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import imgnot from '../../assets/imgs/notfound.png';
import { config } from '@fortawesome/fontawesome-svg-core';
import Cookies from 'js-cookie';
function Product() {
    const token = Cookies.get('token');
    const mng = localStorage.getItem('mng');
    const role = localStorage.getItem('role');
    const [dish, setDish] = useState([]);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    useEffect(() => {
        getDish();
    }, []);

    const getDish = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            const response = await fetchDish(config).then((res) => {
                if (typeof res === typeof 'string') {
                    setDish([]);
                } else {
                    setDish(res);
                }
            });
        } catch (error) {
            console.log('Lỗi');
        }
    };

    const AddItemCart = async (MaMonAn) => {
        try {
            const data = {
                MaNguoiDung: mng,
                MaMonAn: MaMonAn,
                SoLuong: 1,
            };
            const config = {
                withCredentials: true,
            };
            if (token) {
                const response = await AddtoCart(data, config).then((res) => {
                    setTimeout(() => {
                        message.success('Thêm thành công');
                    }, 100);
                });
            } else {
                setTimeout(() => {
                    message.error('Vui lòng đăng nhập');
                }, 100);
            }
        } catch (error) {
            setTimeout(() => {
                message.error('Thêm thất bại');
            }, 100);
        }
    };
    const handleDeleteDish = async (MaMonAn) => {
        try {
            const data = {
                MaMonAn: MaMonAn,
            };
            const config = {
                withCredentials: true,
            };
            await DeleteDish(data, config);
            setTimeout(() => {
                message.success('Xóa thành công');
            }, 100);
            getDish();
        } catch (error) {
            console.log('xóa k đc');
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
                            <div className="d-flex align-items-center justify-content-between col-md-12 mb-3">
                                <div className="d-flex align-items-center">
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
                                {role === 'Admin' ? (
                                    <Link to="/adddish">
                                        <FontAwesomeIcon
                                            className="add_dish"
                                            icon={faSquarePlus}
                                            size="2xl"
                                            style={{ color: '#11ff00' }}
                                        />
                                    </Link>
                                ) : (
                                    <h1></h1>
                                )}
                            </div>
                            <div className="d-flex flex-wrap">
                                {dish.length > 0 ? (
                                    dish.map((item) => (
                                        <div className="col-md-4 ps-3 mb-5" key={item[0]}>
                                            <div className="img_item">
                                                <img
                                                    className=""
                                                    src={item[4] === 'Không có' ? imgnot : item[4]}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-flex flex-column align-items-center mt-3">
                                                <span className="">{item[3]}đ</span>
                                                <span className="mt-3 item">{item[1]}</span>
                                            </div>
                                            <div className="d-flex justify-content-center mt-4">
                                                {role === 'Admin' ? (
                                                    <div className="col-md-12 d-flex justify-content-around">
                                                        <Link to={`/editdish/${item[0]}`}>
                                                            <button className="btn_edit px-4 py-2" onClick={() => {}}>
                                                                Sửa
                                                            </button>
                                                        </Link>
                                                        <button
                                                            className="btn_delete px-4 py-2"
                                                            onClick={() => {
                                                                handleDeleteDish(item[0]);
                                                            }}
                                                        >
                                                            Xóa
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        className="btn_buy px-4 py-2"
                                                        onClick={() => {
                                                            AddItemCart(item[0]);
                                                        }}
                                                    >
                                                        Thêm
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-md-4 ps-3 mb-5">Load sản phẩm lỗi...</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
