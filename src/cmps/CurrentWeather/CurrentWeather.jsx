
import './CurrentWeather.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export const CurrentWeather = ({ currWeather, currLocation, toggleFavorite, isFavorite }) => {

    const isCelsius = useSelector(state => state.isCelsius)
    const isDarkMode = useSelector(state => state.isDarkMode)
    const metricSign = isCelsius ? '°C' : '°F';
    const temperatures = isCelsius ?
        [currWeather[0].Temperature.Metric.Value,
        currWeather[0].RealFeelTemperature.Metric.Value,
        currWeather[0].Wind.Speed.Metric.Value,
        currWeather[0].Wind.Speed.Metric.Unit]
        :
        [currWeather[0].Temperature.Imperial.Value,
        currWeather[0].RealFeelTemperature.Imperial.Value,
        currWeather[0].Wind.Speed.Imperial.Value,
        currWeather[0].Wind.Speed.Imperial.Unit]

    return (
        <section className="current-weather">

            <Card className={`current-container ${isDarkMode ? "dark-mode" : ""}`}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {currLocation.LocalizedName}
                    </Typography>
                    <Typography className={`card-typography ${isDarkMode ? "dark-mode" : ""}`}  color="textSecondary">
                        Temp:  {temperatures[0]} {metricSign}
                    </Typography>
                    <Typography className={`card-typography ${isDarkMode ? "dark-mode" : ""}`} color="textSecondary">
                        Feel: {temperatures[1]} {metricSign}
                    </Typography>
                    <Typography className={`card-typography ${isDarkMode ? "dark-mode" : ""}`} color="textSecondary">
                        Homidity: {currWeather[0].RelativeHumidity}
                    </Typography>
                    <Typography className={`card-typography ${isDarkMode ? "dark-mode" : ""}`} color="textSecondary">
                        Wind Speed: {temperatures[2]} {temperatures[3]}
                    </Typography>
                </CardContent>
            </Card>

            <div className="weather-summery">
                <h2>{currWeather[0].WeatherText}</h2>
                {currWeather[0].WeatherIcon < 10 ?
                    <img className="weather-img" src={`https://developer.accuweather.com/sites/default/files/0${currWeather[0].WeatherIcon}-s.png`} alt="weather icon"></img> :
                    <img className="weather-img" src={`https://developer.accuweather.com/sites/default/files/${currWeather[0].WeatherIcon}-s.png`} alt="weather icon"></img>}
            </div>

            <div className="add-favorite">
                {isFavorite ?
                    <Button onClick={() => toggleFavorite(currLocation, true)} variant="outlined" color="secondary">
                        remove from favorite
                    </Button> :
                    <Button onClick={() => toggleFavorite(currLocation, false)} variant="outlined" color="secondary">
                        add to favorite
                    </Button>
                }
            </div>

        </section>
    )
}

