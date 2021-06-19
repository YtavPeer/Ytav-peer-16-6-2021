import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './cmps/Header';
import { WeatherDetails } from './pages/WeatherDetails';
import { WeatherFavorite } from './pages/WeatherFavorite';
import { PageNotFound } from './pages/PageNotFound';
import day1 from './assets/day1.png'
import day3 from './assets/day1.jpeg'
import day2 from './assets/day2.jpg'
import night2 from './assets/Silverlining4.jpg'
import night1 from './assets/night1.png'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import './App.scss';


function App() {


  const isDarkMode = useSelector(state => state.isDarkMode)

  return (
    <div className="App main-container" style={ isDarkMode ? { backgroundImage: `url(${night1})`} : { backgroundImage: `url(${day3})` } }>

      <Router>
        <Header></Header>
        <Switch>
          <Route component={WeatherFavorite} path='/favorite'></Route>
          <Route component={WeatherDetails} exact path='/'></Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>

        <ToastContainer />
    </div>
  );
}

export default App;
