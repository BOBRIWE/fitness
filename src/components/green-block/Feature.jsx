import React from 'react';

import './_feature.scss';

class Feature extends React.Component {
    render() {
        return (
            <div className='feature col-lg-5 col-sm-10 mt-sm-5 mb-sm-5 mt-3 mb-3'>
                <img className='mb-sm-3 mb-3' src={require('../../images/icons/' + this.props.feature.icon)} />
                <h2 className='mb-sm-3'>{this.props.feature.header}</h2>
                <p className='mb-sm-3'>
                    {this.props.feature.text}
                </p>
                <span>{this.props.feature.anchor}</span>
            </div>
        );
    }
}

module.exports = Feature;
