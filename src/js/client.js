import React from "react";
import ReactDOM from "react-dom"
import App from './components/index'


require('../../public/sass/app.sass');

const app = document.getElementById('app')

ReactDOM.render(<App />, app);
