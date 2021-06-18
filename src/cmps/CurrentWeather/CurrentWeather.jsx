
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

    return (
        <section className="current-weather">

            {isCelsius ? <Card className="current-container" className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {currLocation.LocalizedName}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Temp:  {currWeather[0].Temperature.Metric.Value} °C
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Feel: {currWeather[0].RealFeelTemperature.Metric.Value} °C
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Homidity: {currWeather[0].RelativeHumidity}
                    </Typography>


                    <Typography className={classes.pos} color="textSecondary">
                        Wind Speed: {currWeather[0].Wind.Speed.Metric.Value} {currWeather[0].Wind.Speed.Metric.Unit}
                    </Typography>

                </CardContent>
            </Card> :
                <Card className="current-container" className={classes.root}>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {currLocation.LocalizedName}
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Temp:  {currWeather[0].Temperature.Imperial.Value} °F
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Feel: {currWeather[0].RealFeelTemperature.Imperial.Value} °F
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Homidity: {currWeather[0].RelativeHumidity}
                        </Typography>


                        <Typography className={classes.pos} color="textSecondary">
                            Wind Speed: {currWeather[0].Wind.Speed.Imperial.Value} {currWeather[0].Wind.Speed.Imperial.Unit}
                        </Typography>

                    </CardContent>
                </Card>}



            <div>
                <h2>{currWeather[0].WeatherText}</h2>
                <h1>{isFavorite}</h1>
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

