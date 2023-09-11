import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
function Login() {
    const crypto = require('crypto');
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    function encrypt(text) {
        const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
        const encrypted = cipher.update(text, 'utf-8', 'hex') + cipher.final('hex');
        return encrypted;
    }
    const dangNhap = async () => {
        const encryptedPassword = encrypt(passWord);
        const loginData = {
            username: userName,
            password: passWord,
        };
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchLogin(loginData);
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
