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
            {dish && ()}
            
        </div>
    );
}

export default Cart;
