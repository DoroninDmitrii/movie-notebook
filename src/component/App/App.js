import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import WatchList from '../WatchList/WatchList';
import Watched from '../Watched/Watched';
import Add from '../Add/Add';
import "../../lib/font-awesome/css/all.min.css"
import { globalContext } from '../../context/globalContext';
import { mainReducer } from '../../reducer/mainReducer';



function App() {

const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
}

const [state, dispatch] = useReducer(mainReducer, initialState)
// console.log(state)

  return (

<globalContext.Provider value={{state, dispatch}}>

    <Router>
      <Header />

      <Switch>

        <Route exact path="/">
          <WatchList />
        </Route>

        <Route exact path="/watched">
          <Watched />
        </Route>

        <Route exact path="/add">
          <Add />
        </Route>

      </Switch>

    </Router>

</globalContext.Provider>

  );
}

export default App;
