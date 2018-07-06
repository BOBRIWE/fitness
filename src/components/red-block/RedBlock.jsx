import React from 'react';

import './_red-block.scss';

import GridBlock from '../grid-block/GridBlock.jsx';
import SmCell from '../grid-block/SmCell.jsx';
import BigCell from '../grid-block/BigCell.jsx';

const smCells = [
    {
        type: 'image',
        src: 'runners.png'
    },
    {
        type: 'text',
        textAlign: 'text-left',
        subheader: 'Track your',
        header: 'Lifestyle',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
        type: 'image',
        src: 'mango.png'
    },
    {
        type: 'text',
        style: 'green',
        textAlign: 'text-left',
        subheader: 'Improve your',
        spheader: 'Eating habits',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    }
];

const bigCells = [
    {
        type: 'image',
        align: 'hidden',
        istag: true,
        src: 'man.png',
        tag: 'Health & Fitness',
        date: '24th august'
    },
    {
        type: 'text',
        style: 'green',
        textAlign: 'text-left',
        spheader: 'Summer of sun',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
    },
    {
        type: 'image',
        src: 'grapes.png'
    },
    {
        type: 'text',
        textAlign: 'text-left',
        subheader: 'Track your',
        spheader: 'Get involved in yourself',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.'
    }
];

class RedBlock extends React.Component {
    render() {
        return (
            <div className='container-fluid red-block pr-0 pl-0'>
                <div className='container'>
                    <div className='row'>
                        <GridBlock content={[
                                <SmCell key='1' content={smCells[0]} />,
                                <BigCell key='2' content={bigCells[0]} />
                            ]} />
                    </div>

                    <div className='row'>
                        <GridBlock content={[
                                <SmCell key='1' content={smCells[1]} />,
                                <BigCell key='2' content={bigCells[1]} />
                            ]} />
                    </div>

                    <div className='row'>
                        <GridBlock content={[
                                <BigCell key='1' content={bigCells[2]} />,
                                <SmCell key='2' content={smCells[2]} />
                            ]} />
                    </div>

                    <div className='row'>
                        <GridBlock content={[
                                <BigCell key='1' content={bigCells[3]} />,
                                <SmCell key='2' content={smCells[3]} />
                            ]} />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = RedBlock;
