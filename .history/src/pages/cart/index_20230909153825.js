import './cart.scss';
import anh from '../../assets/imgs/banner-4.png'
function Cart() {
    return <div className='container mt-5'>
        <div className='d-flex'>
            <div className='col-md-3'>
                <img src={anh} alt=''/>
            </div>
            <div className='col-md-9'>
                <span>Tên món</span>
            </div>
        </div>
    </div>;
}

export default Cart;
