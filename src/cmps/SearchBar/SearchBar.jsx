import './SearchBar.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { searchLocation } from '../../store/action/weatherActions'
import { getCurrentWeather, getFiveDaysForecast, setNewLocation } from '../../store/action/weatherActions'
import Button from '@material-ui/core/Button';


export const SearchBar = (props) => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch()
    const searchLocations = useSelector(state => state.searchLocations)

    //get from store the dispatch for autocomplete
    const getAutocompleteSearch = ({ target }) => {
        setSearch(target.value)
        dispatch(searchLocation(target.value))
        console.log('got array of', searchLocations)
    }

    const setSelectedLocation = (location) => {
        dispatch(getCurrentWeather(location.Key))
        dispatch(getFiveDaysForecast(location.Key))
        dispatch(setNewLocation(location))
    }


    return (
        <section className='search-bar' style={{ width: 300 }}>
            <Autocomplete
                id="combo-box-demo"
                options={searchLocations}

                getOptionLabel={(option) => option.LocalizedName}

                renderOption={(option) => {
                    return (<div className="location-option" onClick={() => setSelectedLocation(option)}>
                        <h4>{`${option.LocalizedName}`}</h4>
                        <img src={`https://www.countryflags.io/${option.Country.ID}/shiny/64.png`}></img>
                        <Button className="get-weather-btn" onClick={() => setSelectedLocation(option)} variant="contained" color="primary">
                            Get Weather
                        </Button>
                    </div>)
                }}

                style={{ width: 300 }}
                renderInput={(params) => <TextField className="searchBox" {...params} label="Search Location" variant="outlined" onChange={getAutocompleteSearch} />}
            />
        </section>
    )
}

