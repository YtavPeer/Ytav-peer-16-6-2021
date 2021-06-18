

import './FavoriteList.scss'
import {FavoritePreview} from '../FavoritePreview'

export const FavoriteList = ({favoriteLocations}) => {

    return (
        <section className="favorite-list">
        {
            favoriteLocations && favoriteLocations.map( (location,idx) => <FavoritePreview key={idx} location={location} />)
        }
    </section>
    )
}

