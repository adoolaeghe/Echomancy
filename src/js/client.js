import React from "react";
import ReactDOM from "react-dom"
import Main from './components/main'


require('../../public/sass/app.sass');

const app = document.getElementById('app')

ReactDOM.render(<Main />, app);
