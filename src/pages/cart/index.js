import './cart.scss';
import { fetchCart } from '../../services/restaurant_services';
import { useEffect, useState } from 'react';
import { DeleteItemCard } from '../../services/restaurant_services';
import { message } from 'antd';
function Cart() {
    const mng = localStorage.getItem('mng');
    const [dish, setDish] = useState([]);
    useEffect(() => {
        itemCart();
    }, []);

    const itemCart = async () => {
        const config = {
            withCredentials: true,
        };

        try {
            const response = await fetchCart(config).then((res) => {
                if (typeof res == typeof 'string') {
                    setDish([]);
                    localStorage.setItem('coutnDish', 0);
                } else {
                    setDish(res);
                    localStorage.setItem('coutnDish', res.length);
                }
            });
        } catch (error) {
            console.log('lỗi');
        }
    };
    const DeleteItem = async (id) => {
        try {
            const config = {
                withCredentials: true,
            };
            const response = await DeleteItemCard(id, config).then((res) => {
                setTimeout(() => {
                    message.success('Đã xóa thành công');
                }, 100);
                itemCart();
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container mt-5">
            {dish.length > 0 ? (
                dish.map((item, index) => (
                    <div className="d-flex py-3 " key={index}>
                        <div className="col-md-3 ">
                            <img className="img_cart" src={item[5]} alt="" />
                        </div>
                        <div className="col-md-7 ms-4 d-flex flex-column justify-content-evenly">
                            <span>{item[2]}</span>
                            <span>{item[4]} đ</span>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            <div
                                onClick={() => {
                                    DeleteItem(item[0]);
                                }}
                            >
                                <button className="btn_delete">Xóa</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="push">Không có hàng </div>
            )}
        </div>
    );
}

export default Cart;
