import './cart.scss';
import { fetchCart } from '../../services/restaurant_services';
import { useEffect, useState } from 'react';
import forge from './forge';
function Cart() {
    const mng = localStorage.getItem('mng');
    const [dish, setDish] = useState([]);
    useEffect(() => {
        itemCart();
        console.log();
    }, []);
    const publicKey = () => {
        const publiec =
            '-----BEGIN RSA PUBLIC KEY-----' +
            'MIIBCgKCAQEAp+Dv4cdc79GkY2T2UpGH85MU2R0cmRix6v2S+GB0DO2/58ylIzpt' +
            'eD/REDBGQvOgqxz03eb1MnrnRlUDINjH0TMNDdzd3K1pacN0Obv+hf2lOSntM/FJ' +
            'g8T2BRShaFFO6b6fmi0MDs22UlMac/tb2goJDUmiTmXm+ucHr0dpB9Oh9qwFjTXJ' +
            'pra2UTYNcGMSuaaVDQNZZh4TkB4xAEFDdG59+NUAIaBYQMC8FFJqJTOOaxmwDO2O' +
            'QhEdDB74JJ2SFQ+UELEpY3fzADRscCrXpBDShHTG/4pka5QNDyrsMMiMOPEmnIbA' +
            'pRJC8bnhJRx8Jl29meVpHfQKlU1ursfZOwIDAQAB' +
            '-----END RSA PUBLIC KEY-----';
        const mahoa = 'Xin chào';
        const publicKey = forge.pki.publicKeyFromPem(publicKeyPEM);

        const encryptedData = keyPublic.encrypt(mahoa, 'RSA-OAEP')

    };
    const itemCart = async () => {
        try {
            const response = await fetchCart(mng).then((res) => {
                setDish(res);
                localStorage.setItem('coutnDish', res.length);
            });
        } catch (error) {
            console.log('lỗi');
        }
    };
    return (
        <div className="container mt-5">
            {dish &&
                dish.map((item) => (
                    <div className="d-flex py-3 " key={item[0]}>
                        <div className="col-md-3 ">
                            <img className="img_cart" src={item[4]} alt="" />
                        </div>
                        <div className="col-md-7 ms-4 d-flex flex-column justify-content-evenly">
                            <span>{item[1]}</span>
                            <span>{item[3]} đ</span>
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
