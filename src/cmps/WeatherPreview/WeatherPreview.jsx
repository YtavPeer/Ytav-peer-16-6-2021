import './WeatherPreview.scss';
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

    const celsiusToFahrenheit = (val) => ((val * 9 / 5) + 32).toFixed(2);
    const classes = useStyles();
    const isCelsius = useSelector(state => state.isCelsius)

    const temperatures = [isCelsius? dailyWeather.Temperature.Minimum.Value: celsiusToFahrenheit(dailyWeather.Temperature.Minimum.Value)
        ,isCelsius? dailyWeather.Temperature.Maximum.Value: celsiusToFahrenheit(dailyWeather.Temperature.Maximum.Value)  ];

    const metricSign = isCelsius ? '°C': '°F';

    return (
        <article className="weather-preview">


            <Card className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        {moment(dailyWeather.Date).format('dddd')}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Min Temp {temperatures[0]} {metricSign}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Max Temp {temperatures[1]} {metricSign}
                    </Typography>

                </CardContent>
            </Card> 

        </article>
    )
}

