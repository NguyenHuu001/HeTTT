import './product.scss';
import SiderBarr from '../../Layouts/sidebar';

function Product() {
    return (
        <div>
            <div className="banner_product">
                <span className='titlesp'>Tất cả sản phẩm</span>
                <img
                    style={{ height: '250px', objectFit: 'cover' }}
                    src="https://bizweb.dktcdn.net/100/053/643/themes/877493/assets/sub-banner-top.jpg?1662429924636"
                    alt=""
                />
            </div>
            <div className='container'>
                <div className='row'>
                    <SiderBarr />
                    <div className='col-md-9'></div>
                </div>
            </div>
        </div>
    );
}

export default Product;
