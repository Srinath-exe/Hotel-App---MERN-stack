import './App.css';
import React from 'react';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <BrowserRouter>
        <Route path='/home' component={HomeScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
