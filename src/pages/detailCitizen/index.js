import { useEffect, useState } from 'react';
import { getAllCitizen } from '../../services/restaurant_services';
function DetailCitizen() {
    const [allCitizen, setAllCitizen] = useState([]);
    useEffect(() => {
        fetchCitizen();
    }, []);
    const fetchCitizen = async () => {
        try {
            const config = {
                withCredentials: true,
            };
            await getAllCitizen(config).then((res) => {
                setAllCitizen(res);
            });
        } catch (error) {
            console.log('lỗi lấy khách hàng');
        }
    };
    return (
        <div className="mt-4">
            <div className="container d-flex  title_table">
                <div className="col-md-1 item">
                    <b>STT</b>
                </div>
                <div className="col-md-2 item">
                    <b>Họ Tên</b>
                </div>
                <div className="col-md-2 item">
                    <b>Số điện thoại</b>
                </div>
                <div className="col-md-2 item">
                    <b>Email</b>
                </div>
                <div className="col-md-3 item">
                    <b>Địa chỉ</b>
                </div>
            </div>
            {allCitizen &&
                allCitizen.map((item, index) => (
                    <div className="container d-flex mt-4 title_table" key={index}>
                        <div className="col-md-1">
                            <b>{index + 1} </b>
                        </div>
                        <div className="col-md-2">
                            <b>{item[1]}</b>
                        </div>
                        <div className="col-md-2">
                            <b>{item[3]}</b>
                        </div>
                        <div className="col-md-2">
                            <b>{item[4]}</b>
                        </div>
                        <div className="col-md-3">
                            <b>{item[2]}</b>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default DetailCitizen;
