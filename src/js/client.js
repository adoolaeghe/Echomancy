import React from "react";
import ReactDOM from "react-dom"
import LandingPage from './components/landingPage'


require('../../public/css/app.sass');

const app = document.getElementById('app')

ReactDOM.render(<LandingPage />, app);
