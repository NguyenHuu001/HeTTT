import { useState } from 'react';
import { AddDishItem } from '../../services/restaurant_services';
import { message } from 'antd';

function AddDish() {
    const [dishName, setDishName] = useState('');
    const [dishDescription, setDishDescription] = useState('');
    const [price, setPrice] = useState();
    const [urlIMG, setUrlIMG] = useState('');
    const AddItem = async () => {
        try {
            if (!dishName && !dishDescription && !price && !urlIMG) return;
            const data = {
                TenMonAn: dishName,
                MoTa: dishDescription,
                Gia: price,
                AnhMonAn: urlIMG || 'Không có',
            };
            const config = {
                withCredentials: true,
            };
            await AddDishItem(data, config);
            setTimeout(() => {
                message.success('Thêm thành công');
            }, 100);
        } catch (error) {
            console.log('lỗi');
        }
    };
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="col-md-5">
                <div className="d-flex justify-content-center">
                    <h2 style={{ textTransform: 'uppercase', color: '#f2b94c' }}>Thêm Món Ăn</h2>
                </div>
                <div>
                    <div className="form-group mt-4">
                        <label className="mb-3">Tên Món Ăn:</label>
                        <input
                            value={dishName}
                            type="text"
                            className="form-control"
                            required
                            onChange={(e) => setDishName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label className="mb-3">Mô Tả:</label>
                        <textarea
                            value={dishDescription}
                            className="form-control"
                            required
                            onChange={(e) => setDishDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <label className="mb-3">Giá:</label>
                        <input
                            value={price}
                            type="number"
                            className="form-control"
                            required
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label className="mb-3">URL Hình Ảnh:</label>
                        <input
                            value={urlIMG}
                            type="text"
                            className="form-control"
                            required
                            onChange={(e) => setUrlIMG(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ backgroundColor: '#f2b94c', border: '1px solid #f2b94c' }}
                            onClick={AddItem}
                        >
                            Thêm Món Ăn
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDish;
