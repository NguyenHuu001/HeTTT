import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
import CryptoJS from 'crypto-js';
function Login() {
    const key = '123';
    const iv = '123';
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    const encrypted = (data) => {
        const encryptedData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptedData.toString();
    };
    const dangNhap = async () => {
        const new pa
        setPassWord();
        console.log(passWord);
        const loginData = {
            username: userName,
            password: passWord,
        };
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchLogin(loginData, config);
            console.log(response);
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
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
