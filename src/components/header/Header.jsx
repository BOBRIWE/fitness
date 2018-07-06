import React from 'react';

import '../../images/logo.png';

import './_header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className='container-fluid mt-sm-5'>
                <div className='logo ml-sm-5'></div>
                <nav>
                    <div><span>About</span></div>
                    <div><span>How it works</span></div>
                    <div><span>Services</span></div>
                    <div><span>FAQ</span></div>
                    <div><span>Contact</span></div>
                </nav>
            </header>
        );
    }
}

module.exports = Header;
