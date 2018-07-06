import React from 'react';

import './_green-block.scss';
import Feature from './Feature.jsx';
import GridBlock from '../grid-block/GridBlock.jsx';
import SmCell from '../grid-block/SmCell.jsx';
import BigCell from '../grid-block/BigCell.jsx';

const features = [
    {
        icon: 'shape-1.png',
        header: 'Resources',
        text: 'Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and',
        anchor: 'Explore more →'
    },
    {
        icon: 'shape-2.png',
        header: 'Training & Funding',
        text: 'Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and',
        anchor: 'Browse training →'
    },
    {
        icon: 'shape-3.png',
        header: 'Connect',
        text: 'Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and',
        anchor: 'Connect now →'
    },
    {
        icon: 'shape-4.png',
        header: 'Communicate',
        text: 'Easily manage your inspiration and work-in-progress by dragging images into projects and sharable client groups. Easily manage your inspiration and',
        anchor: 'Start now→'
    }
];

const smCells = [
    {
        type: 'text',
        subheader: 'It\'s all about',
        header: 'Fitness first',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        anchor: 'Read More'
    },
    {
        type: 'text',
        subheader: 'Love your',
        header: 'Your body',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        anchor: 'Read More'
    }
];

const bigCells = [
    {
        type: 'image',
        src: 'woman.png',
        value: 34,
        align: 'right'
    },
    {
        type: 'image',
        src: 'hand.png',
        value: 658,
        align: 'left'
    }
]

class GreenBlock extends React.Component {
    render() {
        return (
            <div className='container-fluid green-block pr-0 pl-0'>
                <div className='container'>
                    <div className='row'>
                        <Feature feature={features[0]} />
                        <Feature feature={features[1]} />
                        <Feature feature={features[2]} />
                        <Feature feature={features[3]} />
                    </div>

                    <div className='row'>
                        <GridBlock content={[
                                <SmCell key='1' content={smCells[0]} />,
                                <BigCell key='2' content={bigCells[0]} />
                            ]} />
                    </div>

                    <div className='row'>
                        <GridBlock content={[
                                <BigCell key='1' content={bigCells[1]} />,
                                <SmCell key='2' content={smCells[1]} />
                            ]} />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = GreenBlock;
