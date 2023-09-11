import './home.scss';
import banner from '../../assets/imgs/baner_home.png'
import banner1 from '../../assets/imgs/banner-3.png'
import banner2 from '../../assets/imgs/banner-4.png'
function Home() {
    return <div>
        <div className='container-fluid p-0'>
            <img src={banner} alt='banner'></img>
        </div>
        <div className='container'>
            <div className='col-md-5'>
                <img src={} alt='banner'></img>
            </div>
            <div className='col-md-7'></div>
        </div>
    </div>;
}

export default Home;
