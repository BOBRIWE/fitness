import './stylesheets/scss/main.scss';

import './fonts/myriad-pro/myriad-pro-regular.jsx';

import ReactDOM from 'react-dom';
import React from 'react';

import Head from './components/head/Head.jsx';
import Header from './components/header/Header.jsx';
import GreenBlock from './components/green-block/GreenBlock.jsx';
import RedBlock from './components/red-block/RedBlock.jsx';
import Footer from './components/footer/Footer.jsx';

ReactDOM.render(
    <div className='main' style={{position: 'relative'}}>
        <Header />
        <Head />
        <GreenBlock />
        <RedBlock />
        <Footer />
    </div>,
    document.getElementById('root')
);
