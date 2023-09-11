import './cart.scss';
import anh from '../../assets/imgs/banner-4.png'
function Cart() {
    return <div className='container'>
        <div>
            <div className='col-md-2'>
                <img src={anh} alt=''/>
            </div>
        </div>
    </div>;
}

export default Cart;
