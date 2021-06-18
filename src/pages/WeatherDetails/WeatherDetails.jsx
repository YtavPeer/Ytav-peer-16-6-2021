import './WeatherDetails.scss'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentWeather, getFiveDaysForecast, addToFavoriteList, removeFromFavoriteList } from '../../store/action/weatherActions'
import { SearchBar } from '../../cmps/SearchBar';
import { WeatherList } from '../../cmps/WeatherList';
import { CurrentWeather } from '../../cmps/CurrentWeather';
import { UserLocation } from '../../cmps/UserLocation';



export const WeatherDetails = (props) => {

    const dispatch = useDispatch()
    const currLocation = useSelector(state => state.currentLocation)
    const currWeather = useSelector(state => state.currWeather)
    const currFiveDaysForecast = useSelector(state => state.currFiveDaysForecast)

    const favoriteLocations = useSelector(state => state.favoriteLocations)

    const isFavorite = favoriteLocations.some( location => location['Key'] === currLocation.Key )

    useEffect(() => {
        dispatch(getCurrentWeather(currLocation.Key))
        dispatch(getFiveDaysForecast(currLocation.Key))
    }, [])

    const toggleFavorite = (location, needToRemove) => {
        if(needToRemove){
            dispatch(removeFromFavoriteList (location))
        }else{
            dispatch(addToFavoriteList(location))
        }
    }

    return (
        <main className="weather-details">
            <div className="search-container">
                <SearchBar />
                <UserLocation />
            </div>
            {currWeather && <CurrentWeather currWeather={currWeather} currLocation={currLocation} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
            {currFiveDaysForecast && <WeatherList currFiveDaysForecast={currFiveDaysForecast.DailyForecasts} />}
        </main>
    )
}

