import '../css/app0811-weather.css'
import { FaUmbrella } from "react-icons/fa6";
const App = () => {
    return (
        <div className="WeatherCard">
            <div className='place'>
                <h2>台北市</h2>
            </div>
            <div className='weathercard-allbody'>
                <div className="weathercard-body">
                    <h3 className="date">11日</h3>
                    <p className="starttime">上午6:00</p>
                    <p className="~">~</p>
                    <p className="endtime">下午6:00</p>
                    <img src="" className="card-img" alt="..." />
                    <p className="weather">晴午後短暫雷陣雨</p>
                    <p className="%"><FaUmbrella />80%</p>
                </div>
                <div className="weathercard-body">
                    <h3 className="date">11日</h3>
                    <p className="starttime">下午6:00</p>
                    <p className="~">~</p>
                    <p className="endtime">上午6:00</p>
                    <img src="./weatherIcon/多雲短暫陣雨.svg" className="card-img" alt="..." />
                    <p className="weather">多雲短暫陣雨</p>
                    <p className="%"><FaUmbrella />40%</p>
                </div>
                <div className="weathercard-body">
                    <h3 className="date">12日</h3>
                    <p className="starttime">上午6:00</p>
                    <p className="~">~</p>
                    <p className="endtime">下午6:00</p>
                    <img src="" className="card-img" alt="..." />
                    <p className="weather">多雲午後短暫雷陣雨</p>
                    <p classNamen="%"><FaUmbrella />40%</p>
                </div>
            </div>



        </div>

    )


}


export default App