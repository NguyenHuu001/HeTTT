import { React, useEffect, useState } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
import CryptoJS from 'crypto-js';
function Login() {
    //AES
    const key = '1234567890123456';
    const iv = '1234567890123456';
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    function encrypt(data) {
        const encryptedData = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptedData.toString();
    }
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
                const response = await fetchLogin(loginData, config);
                console.log(response);
                if(!response){
                    notification.open({
                        type: 'error',
                        message: 'Đăng nhập thất bại',
                        description: 'Sau UserName hoặc PassWord',
                        duration: 2,
                    });
                }
            } else {
                notification.open({
                    type: 'error',
                    message: 'Thông Báo Lỗi',
                    description: 'Vui lòng điền UserName hoặc PassWord',
                    duration: 2,
                });
            }
        } catch (error) {
            console.log('Lỗi');
        }
    };
    return (
        <div>
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
                    <Button type="primary" htmlType="submit" onClick={dangNhap}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
