import React from 'react';

import './_grid-block.scss';

class GridBlock extends React.Component {
    render() {
        return (
            <div className='grid-block col-sm-20 pl-0 pr-0'>
                <div className='container'>
                    <div className='row'>
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = GridBlock;
