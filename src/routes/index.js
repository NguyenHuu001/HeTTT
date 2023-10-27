import Home from '../pages/home';
import Login from '../pages/login';
import Product from '../pages/product';
import Cart from '../pages/cart';
import AddDish from '../pages/adddish';
import EditDishs from '../pages/editdish';
import DetailCitizen from '../pages/detailCitizen';
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/product', component: Product },
    { path: '/cart', component: Cart },
    { path: '/adddish', component: AddDish },
    { path: '/editdish/:ID', component: EditDishs },
    { path: '/detailcitizen', component: DetailCitizen },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
