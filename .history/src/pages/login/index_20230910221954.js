import { React, useEffect, useState } from 'react';
import { Form, Input, notification } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
import './login.scss';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { fetchKeys } from '../../services/restaurant_services';
import forge from 'node-forge';
function Login() {
    const navigate = useNavigate();
    //AES
    const key = '1234567890123456';
    // const iv = '123456789012345623';
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    const [userCode, setUserCode] = useState();
    useEffect(() => {}, [userCode]);
    //RSA
    const getKeys = async (data) => {
        try {
            const response = await fetchKeys().then((res) => {
                // console.log(res.package);
                const publicKey = res.package;

                // Chuyển đổi khóa công khai từ dạng chuỗi PEM sang đối tượng khóa công khai
                const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);

                // Mã hóa dữ liệu bằng khóa công khai
                const encryptedData = publicKeyObj.encrypt(data, 'RSA-OAEP');
                const enData = forge.util.encode64(encryptedData);
                // console.log(enData);
                const serverResponse = await sendEncryptedDataToServer(enData);
            });
        } catch (error) {
            console.log('lỗi');
        }
    };
    //AES
    function encrypt(data) {
        const encryptedData = CryptoJS.AES.encrypt(data, key, {
            // iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptedData.toString();
    }

    const dangNhap = async () => {
        const newpass = encrypt(passWord);
        // console.log(newpass);
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

                    if (da[1]) {
                        localStorage.setItem('userName', da[1]);
                        navigate('/home');
                        getKeys(da[0]);

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
