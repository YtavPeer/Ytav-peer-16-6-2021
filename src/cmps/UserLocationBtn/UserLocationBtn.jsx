import './UserLocationBtn.scss'
import { useDispatch } from 'react-redux';
import { getLocationFromGeolocation } from '../../store/action/weatherActions'
import { Button } from '@material-ui/core';

export const UserLocationBtn = (props) => {

    const dispatch = useDispatch()

    const getMyLocation = () => {
        navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError)
    }

    const geoLocationSuccess = (position) => {
        dispatch(getLocationFromGeolocation(position.coords.latitude, position.coords.longitude))
    }

    const geoLocationError = (err) => {
        console.log('got error when try to get geolocation', err)
    }

    return (
        <section className="user-location">
            <Button className="location-btn" variant="contained" color="primary" onClick={getMyLocation}>
                Use My Location
            </Button>
        </section>
    )
}

