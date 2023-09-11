import { React, useEffect, useState } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
import './login.scss';
import CryptoJS from 'crypto-js';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import forge from 'node-forge';
function Login() {
    const navigate = useNavigate();
    //AES
    const key = '1234567890123456';
    // const iv = '123456789012345623';
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    function encrypt(data) {
        const encryptedData = CryptoJS.AES.encrypt(data, key, {
            // iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptedData.toString();
    }
    const publicKey = (da) => {
        const publicKeyPEM =
            '-----BEGIN RSA PUBLIC KEY-----' +
            'MIIBCgKCAQEAp+Dv4cdc79GkY2T2UpGH85MU2R0cmRix6v2S+GB0DO2/58ylIzpt' +
            'eD/REDBGQvOgqxz03eb1MnrnRlUDINjH0TMNDdzd3K1pacN0Obv+hf2lOSntM/FJ' +
            'g8T2BRShaFFO6b6fmi0MDs22UlMac/tb2goJDUmiTmXm+ucHr0dpB9Oh9qwFjTXJ' +
            'pra2UTYNcGMSuaaVDQNZZh4TkB4xAEFDdG59+NUAIaBYQMC8FFJqJTOOaxmwDO2O' +
            'QhEdDB74JJ2SFQ+UELEpY3fzADRscCrXpBDShHTG/4pka5QNDyrsMMiMOPEmnIbA' +
            'pRJC8bnhJRx8Jl29meVpHfQKlU1ursfZOwIDAQAB' +
            '-----END RSA PUBLIC KEY-----';
        const mahoa = da;
        const publicKey = forge.pki.publicKeyFromPem(publicKeyPEM);

        const encryptedData = publicKey.encrypt(mahoa, 'RSA-OAEP');
        return encryptedData;
    };
    const dangNhap = async () => {
        const newpass = encrypt(passWord);
        console.log(newpass);
        try {
            const loginData = {
                username: userName,
                password: newpass,
            };
            const config = {
                withCredentials: true,
            };
            if (userName && passWord) {
                const response = await fetchLogin(loginData, config).then((res) => {
                    const da = res.data[0];
                    console.log(da[]);
                    console.log(publicKey([da[0]]));
                    localStorage.setItem('mng', da[0]);
                    if (da[1]) {
                        localStorage.setItem('userName', da[1]);
                        navigate('/home');
                        notification.open({
                            type: 'success',
                            message: 'Đăng nhập thành công',
                            description: '',
                            duration: 2,
                        });
                    }
                });
            } else {
                notification.open({
                    type: 'error',
                    message: 'Thông Báo Lỗi',
                    description: 'Vui lòng điền UserName hoặc PassWord',
                    duration: 2,
                });
            }
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Đăng nhập thất bại',
                description: 'Sai tài khoản hoặc mật khẩu',
                duration: 2,
            });
        }
    };
    return (
        <div className="mt-5 d-flex justify-content-center">
            <div className="login">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            onChange={(e) => {
                                setPassWord(e.target.value);
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <button className="button_login" type="primary" onClick={dangNhap}>
                            Đăng nhập
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
