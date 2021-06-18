import { NavLink } from 'react-router-dom'
import herolo from '../../assets/herolo.png'
import home from '../../assets/home.svg'
import history from '../../assets/history.svg'
import celsius from '../../assets/celsius.png'
import farenheit from '../../assets/farenheit.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, toggleUnit } from '../../store/action/weatherActions'

import './Header.scss'

export const Header = (props) => {

    const dispatch = useDispatch()
    const isCelsius = useSelector(state => state.isCelsius)
    const isDarkMode = useSelector(state => state.isDarkMode)

    const toggleMode = () => {
        console.log('ddd')
        dispatch(toggleDarkMode)
    }

    const toggleCelsius = () => {
        dispatch(toggleUnit)
    }

    return (
        <header className="app-header">
            <div>
                <img className="herolo" src={herolo} alt='herolo-icon' />
            </div>
            <ul className="navbar-header">

                {isCelsius ? <img className="icon-toggle" src={celsius} alt="" onClick={toggleCelsius}  /> : <img className="icon-toggle" src={farenheit} alt="" onClick={toggleCelsius}  />}
                {isDarkMode ? <img className="icon-toggle" src={moon} alt="" onClick={toggleMode} /> : <img className="icon-toggle" src={sun} alt="" onClick={toggleMode} />}

                <NavLink exact to="/" activeClassName="active-nav">
                    <img className="icon-nav" src={home} alt='home-icon' />
                </NavLink>
                <NavLink to="/favorite" activeClassName="active-nav">
                    <img className="icon-nav" src={history} alt='favorite-icon' />
                </NavLink>
            </ul>
        </header>
    )
}

