import React from 'react';

import '../../images/head-bg.png';

import './_head.scss';

class Head extends React.Component {
    render() {
        return (
            <div className='container-fluid head'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-20 mt'>
                            <h1>Fitness in a can<span>/</span></h1>
                            <p className='h1-p'>Yes you can<span>/</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Head;
