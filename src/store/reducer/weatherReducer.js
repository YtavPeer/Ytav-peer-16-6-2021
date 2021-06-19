import { weatherService } from '../../services/weatherService'
import defaultLocation from './defaultLocation.json'

const INITIAL_STATE = {
  currentLocation: defaultLocation,
  currWeather: null,
  currFiveDaysForecast: null,
  favoriteLocations: weatherService.getFavoriteList(),
  searchLocations: [],
  isCelsius: true,
  isDarkMode: false
}

export function weatherReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'SEARCH_LOCATION':
      return {
        ...state,
        searchLocations: action.payload
      }
    case 'GET_WEATHER':
      return {
        ...state,
        currWeather: action.payload
      }
    case 'GET_FIVE_DAYS_FORECAST':
      return {
        ...state,
        currFiveDaysForecast: action.payload
      }
    case 'SET_NEW_LOCATION':
      return {
        ...state,
        currentLocation: action.payload
      }
    case 'UPDATE_FAVORITE_LIST':
      return {
        ...state,
        favoriteLocations: action.payload
      }
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode
      }
    case 'TOGGLE_UNIT':
      return {
        ...state,
        isCelsius: !state.isCelsius
      }
    default:
      return state
  }
}