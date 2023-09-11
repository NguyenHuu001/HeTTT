import './product.scss';
function Product() {
    return (
        <div>
            <div className='banner_product'>
                <div >
                    <img
                        style={{ height: '250px', objectFit:'cover' }}
                        src="https://bizweb.dktcdn.net/100/053/643/themes/877493/assets/sub-banner-top.jpg?1662429924636"
                        alt=""
                    />
                </div>
                <span className='cotent'>Ảnh</span>
            </div>
        </div>
    );
}

export default Product;
