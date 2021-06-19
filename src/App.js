import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './cmps/Header';
import { WeatherDetails } from './pages/WeatherDetails';
import { WeatherFavorite } from './pages/WeatherFavorite';
import { PageNotFound } from './pages/PageNotFound';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {

  const isDarkMode = useSelector(state => state.isDarkMode)

  return (
    <div className={`App main-container ${isDarkMode ? "background-dark" : "background-light"}`} >

      <Router>
        <Header></Header>

        <Switch>
          <Route component={WeatherFavorite} path='/favorite'></Route>
          <Route component={WeatherDetails} exact path='/'></Route>
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
      </Router>

    </div>
  );
}

export default App;
