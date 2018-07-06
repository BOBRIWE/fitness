import React from 'react';

import './_cell.scss';

class BigCell extends React.Component {
    render() {
        let res;
        let cellCont = this.props.content;

        if(cellCont.type === 'text') {
            res = (
                <div className={'sm-cell col-lg-13 col-20 cell ' + ((cellCont.textAlign === 'text-left' ? 'text-left ' : 'centered ')) + ((cellCont.style === 'green') ? 'green' : '')}>
                    <h3 className='sub-header mb-0 pl-5 pr-5'>{cellCont.subheader}</h3>
                    <h2 className='pl-5 pr-5'>{cellCont.header}</h2>
                    <h2 className='pl-5 pr-5'>{cellCont.spheader}</h2>
                    <span className='drop'><img src={require('../../images/icons/drop.png')} /></span>
                    <p className='pl-5 pr-5'>
                        {cellCont.text}
                        <br />
                        <span>{cellCont.anchor}</span>
                    </p>
                    <span className='person-ico'>
                        <img src={require('../../images/icons/berry-ico.png')} />
                    </span>
                </div>
            );
        } else {
            res = (
                <div className='cell col-lg-13 col-20 pt-0 pl-0 pr-0'>
                    <img className='big' src={require('../../images/' + cellCont.src)} />
                    <span className={`users ${cellCont.align}`}>
                        Active Users
                        <span className='value'> ({cellCont.value})</span>
                        <img src={require('../../images/icons/drop-red.png')} />
                    </span>
                    <span className='date'>{cellCont.date}</span>
                    <span className={'tag ' + (cellCont.istag ? '' : 'hidden')}>{cellCont.tag}<img src={require('../../images/icons/tag.png')} /></span>
                </div>
            );
        }

        return res;
    }
}


module.exports = BigCell;
