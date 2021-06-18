import './WeatherFavorite.scss'
import { useSelector } from 'react-redux';
import { FavoriteList } from '../../cmps/FavoriteList';


export const WeatherFavorite = () => {

    const favoriteLocations = useSelector(state => state.favoriteLocations)
    
    
    return (
        <section>
            <h1>Your save Weather Location</h1>
            <h4>Click on Location to get full details</h4>
            {favoriteLocations && <FavoriteList favoriteLocations={favoriteLocations} />}
        </section>
    )
}
