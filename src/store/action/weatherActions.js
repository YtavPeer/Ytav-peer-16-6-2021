import { weatherService } from '../../services/weatherService'

export const searchLocation = q => async dispatch => {
      try {
            const autocompleteLocations = await weatherService.query(q);
            dispatch({ type: 'SEARCH_LOCATION', payload: autocompleteLocations });
      } catch (err) {
            console.log('get error while try to fetch from api - search location', err)
      }
}

export const getCurrentWeather = locationCode => async dispatch => {
      try {
            const weatherData = await weatherService.getWeather(locationCode);
            dispatch({ type: 'GET_WEATHER', payload: weatherData });
      } catch (err) {
            console.log('get error while try to fetch from api- get current weather', err)
      }
}

export const getFiveDaysForecast = locationCode => async dispatch => {
      try {
            const fiveDaysForecast = await weatherService.getFiveDaysForecast(locationCode);
            dispatch({ type: 'GET_FIVE_DAYS_FORECAST', payload: fiveDaysForecast });
      } catch (err) {
            console.log('get error while try to fetch from api- get 5 days forecast', err)
      }
}

export const setNewLocation = locationData => async dispatch => {
      try {
            dispatch({ type: 'SET_NEW_LOCATION', payload: locationData });
      } catch (err) {
            console.log('get error while try to set location data ', err)
      }
}

export const addToFavoriteList = locationData => async dispatch => {
      try {
            const updatedFavoriteList = await weatherService.updateFavoriteList(locationData);
            dispatch({ type: 'UPDATE_FAVORITE_LIST', payload: updatedFavoriteList });
      } catch (err) {
            console.log('get error while try to update favorite data ', err)
      }
}

export const removeFromFavoriteList = locationData => async dispatch => {
      try {
            const updatedFavoriteList = await weatherService.removeFromFavoriteList(locationData);
            dispatch({ type: 'UPDATE_FAVORITE_LIST', payload: updatedFavoriteList });
      } catch (err) {
            console.log('get error while try to update favorite data ', err)
      }
}

export const getLocationFromGeolocation = (lat, lon) => async dispatch => {
      try {
            const location = await weatherService.getGeoLocation(lat, lon);
            dispatch({ type: 'SET_NEW_LOCATION', payload: location });
            const weatherData = await weatherService.getWeather(location.Key);
            dispatch({ type: 'GET_WEATHER', payload: weatherData });
            const fiveDaysForecast = await weatherService.getFiveDaysForecast(location.Key);
            dispatch({ type: 'GET_FIVE_DAYS_FORECAST', payload: fiveDaysForecast });
      } catch (err) {
            console.log('get error while try to fetch from api - get Geolocation', err)
      }
}

export const toggleDarkMode = dispatch => {
      try {
            dispatch({ type: 'TOGGLE_DARK_MODE' });
      } catch (err) {
            console.log('error while try to toggle dark mode', err)
      }
}

export const toggleUnit = dispatch => {
      try {
            dispatch({ type: 'TOGGLE_UNIT' });
      } catch (err) {
            console.log('error while try to toggle unit', err)
      }
}