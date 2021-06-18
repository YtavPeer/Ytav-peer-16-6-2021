import './WeatherPreview.scss';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
    root: {
        // minWidth: 275,
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

export const WeatherPreview = ({ dailyWeather }) => {


    const classes = useStyles();
    const isCelsius = useSelector(state => state.isCelsius)

    return (
        <article className="weather-preview">


            {isCelsius ? <Card className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {moment(dailyWeather.Date).format('dddd')}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        MIM Temp{dailyWeather.Temperature.Minimum.Value} °C
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        MAX Temp{dailyWeather.Temperature.Maximum.Value} °C
                    </Typography>

                </CardContent>
            </Card> :
                <Card className={classes.root}>
                    <CardContent>

                        <Typography variant="h5" component="h2">
                            {moment(dailyWeather.Date).format('dddd')}
                        </Typography>


                        <Typography className={classes.pos} color="textSecondary">
                            Min Temp {((dailyWeather.Temperature.Minimum.Value * 9 / 5) + 32).toFixed(2)} °F
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Max Temp {((dailyWeather.Temperature.Maximum.Value * 9 / 5) + 32).toFixed(2)} °F
                        </Typography>

                    </CardContent>
                </Card>}


        </article>
    )
}

