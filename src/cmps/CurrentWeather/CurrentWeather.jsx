
import './CurrentWeather.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export const CurrentWeather = ({ currWeather, currLocation, toggleFavorite, isFavorite }) => {

    const isCelsius = useSelector(state => state.isCelsius)
    const classes = useStyles();

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

    const metricSign = isCelsius ? '°C' : '°F';

    return (
        <section className="current-weather">

            <Card className="current-container" className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {currLocation.LocalizedName}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Temp:  {temperatures[0]} {metricSign}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Feel: {temperatures[1]} {metricSign}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Homidity: {currWeather[0].RelativeHumidity}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Wind Speed: {temperatures[2]} {temperatures[3]}
                    </Typography>
                </CardContent>
            </Card>

            <div className="weather-summery">
                <h2>{currWeather[0].WeatherText}</h2>
                {currWeather[0].WeatherIcon < 10 ?
                    <img src={`https://developer.accuweather.com/sites/default/files/0${currWeather[0].WeatherIcon}-s.png`}></img> :
                    <img src={`https://developer.accuweather.com/sites/default/files/${currWeather[0].WeatherIcon}-s.png`}></img>}
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

