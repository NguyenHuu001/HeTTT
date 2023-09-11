import './cart.scss';
import anh from '../../assets/imgs/banner-4.png';
import { fetchCart } from '../../services/restaurant_services';
import { useEffect, useState } from 'react';
function Cart() {
    const mng = localStorage.getItem('mng');
    const [dish, setDish] = useState([]);
    useEffect(() => {
        itemCart();
    }, []);
    const itemCart = async () => {
        try {
            const response = await fetchCart(mng).then((res) => {
                setDish(res);
            });
        } catch (error) {
            console.log('lỗi');
        }
    };
    return (
        <div className="container mt-5">
            {dish &&
                dish.map((item) => (
                    <div className="d-flex" ite>
                        <div className="col-md-3">
                            <img src={anh} alt="" />
                        </div>
                        <div className="col-md-7 ms-4 d-flex flex-column justify-content-evenly">
                            <span>Tên món</span>
                            <span>Tiền</span>
                        </div>
                        <div className="col-md-2 d-flex align-items-center">
                            <div>
                                <button className="btn_delete">Xóa</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Cart;
