import React from "react";
import ReactDOM from "react-dom"
import LandingPage from './components/landingPage'
import WaitingPage from './components/waitingPage'


require('../../public/css/app.sass');

const app = document.getElementById('app')

ReactDOM.render(<WaitingPage />, app);
