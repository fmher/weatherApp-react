import { getCurrentWeather } from "../api"

function CurrentWeather() {
    const data = getCurrentWeather();
    // console.log(data)
    const { cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind } = data;
    return <div> currentWeather
        <div>temp
            <div>icon
                <img />
            </div>
        </div>
        <div>other info</div>
    </div>
}

export default CurrentWeather;