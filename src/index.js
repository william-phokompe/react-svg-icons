import React from 'react';
import { render } from 'react-dom';
import Cake from './icons';

import './styles/style.css';

const styles = {
    fontFamily: "sans-serif"
};


const App = () => ( 
    <div style={styles}>
        <Cake />
    </div>
);

render( <App /> , document.getElementById('root'));
