import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { searchLocation } from '../../store/action/weatherActions'
import { getCurrentWeather, getFiveDaysForecast, setNewLocation } from '../../store/action/weatherActions'
import Button from '@material-ui/core/Button';
import db from 'just-debounce'

export const SearchBar = (props) => {

    const dispatch = useDispatch()
    const searchLocations = useSelector(state => state.searchLocations)

    const getAutocompleteSearch = ({ target }) => {
        const debounceAutocomplete = db( () =>  dispatch(searchLocation(target.value)), 500 )
        debounceAutocomplete()
    }

    const setSelectedLocation = (location) => {
        dispatch(getCurrentWeather(location.Key))
        dispatch(getFiveDaysForecast(location.Key))
        dispatch(setNewLocation(location))
    }

    return (
        <section className='search-bar'>
            <Autocomplete
                id="combo-box-demo"
                options={searchLocations}
                getOptionLabel={(option) => option.LocalizedName}
                renderOption={(option) => {
                    return (<div className="location-option" onClick={() => setSelectedLocation(option)}>
                        <Button className="get-weather-btn" onClick={() => setSelectedLocation(option)} variant="contained" color="primary">
                            Get Weather
                        </Button>
                        <img className="flag-pic" src={`https://www.countryflags.io/${option.Country.ID}/shiny/64.png`} alt="flag icon"></img>
                        <h4>{`${option.LocalizedName}`}</h4>
                    </div>)
                }}
                style={{ width: 300 }}
                renderInput={(params) => <TextField className="searchBox" {...params} label="Search Location" variant="outlined" onChange={getAutocompleteSearch} />}
            />
        </section>
    )
}

