import './FavoritePreview.scss'
import { useEffect, useState } from 'react';
import { weatherService } from '../../services/weatherService'
import { useDispatch } from 'react-redux';
import { getCurrentWeather, getFiveDaysForecast, setNewLocation } from '../../store/action/weatherActions'
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    root: {

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


export const FavoritePreview = ({ location }) => {

    const classes = useStyles();
    const [weather, setWeather] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const isCelsius = useSelector(state => state.isCelsius)

    useEffect(() => {
        (async () => {
            const weatherData = await weatherService.getWeather(location.Key)
            await setWeather(weatherData)
        })()
    }, [])


    const onSelectLocation = async () => {
        dispatch(setNewLocation(location))
        dispatch(getCurrentWeather(location.Key))
        dispatch(getFiveDaysForecast(location.Key))
        history.push('/')
    }

    return (
        <article className="favorite-preview" onClick={onSelectLocation}>

            {isCelsius ? <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {location.LocalizedName}
                    </Typography>
                    {weather && <Typography className={classes.pos} color="textSecondary">temp: {weather[0].Temperature.Metric.Value}  °C</Typography>}
                    {weather && <Typography className={classes.pos} color="textSecondary">{weather[0].WeatherText}</Typography>}
                </CardContent>
            </Card> :
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {location.LocalizedName}
                        </Typography>
                        {weather && <Typography className={classes.pos} color="textSecondary">temp: {weather[0].Temperature.Imperial.Value} °F</Typography>}
                        {weather && <Typography className={classes.pos} color="textSecondary">{weather[0].WeatherText}</Typography>}
                    </CardContent>
                </Card>}
        </article>
    )
}

