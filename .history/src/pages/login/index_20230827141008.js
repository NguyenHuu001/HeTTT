import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
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
            const response = await fetchLogin(loginData, config);
            console.log(response);
        } catch (error) {
            console.log('Lỗi');
        }
    };
    return (
        <div>
            <div className="container col-sm-12 mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                    <div className="col-md-4 col-12 d-flex align-items-center">
                        <img src={imgpass} alt="anh pass" />
                    </div>
                    <div className="col-md-4 col-12 mt-5 d-flex flex-column align-items-center bg-login">
                        <img
                            className="avatar_login"
                            src={avatarLogin}
                            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                            alt=""
                        />
                        <h3 className="title_login">Login</h3>
                        <div className="col-md-10">
                            <Form
                                className="d-flex flex-column justify-content-center align-items-center form"
                                {...layout}
                                name="nest-messages"
                            >
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input
                                        style={{ width: '100%' }}
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div style={{ width: '100%' }} className="mb-4">
                                    <Input.Password
                                        style={{ width: '100%' }}
                                        placeholder="input password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <Button
                                    className="mb-4 d-flex justify-content-center align-items-center"
                                    style={{ width: '100%', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() => handleLogin()}
                                >
                                    {spin && (
                                        <LoadingOutlined
                                            style={{
                                                fontSize: 15,
                                            }}
                                            spin
                                        />
                                    )}
                                    Login
                                </Button>
                                <div className="d-flex  ">
                                    <p className="cdk mb-0 me-3">Don't have an account? </p>
                                    <Link to="/register">
                                        <div style={{ textDecoration: 'none', color: 'black' }} className="fw-bolder">
                                            Create
                                        </div>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
