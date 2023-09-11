import './cart.scss';
import anh from '../../assets/imgs/banner-4.png';
function Cart() {
    return (
        <div className="container mt-5">
            <div className="d-flex">
                <div className="col-md-3">
                    <img src={anh} alt="" />
                </div>
                <div className="col-md-7 ms-4 d-flex flex-column justify-content-evenly">
                    <span>Tên món</span>
                    <span>Tiền</span>
                </div>
                <div className="col-md-2">
                    <div>
                        <button className='btn_delete'>Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
