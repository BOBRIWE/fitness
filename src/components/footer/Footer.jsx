import React from 'react';

import './_footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container-fluid footer-head'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-20 mt'>
                                <h2>We launch leaders with big ideas</h2>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-8 col-20 offset-lg-6 mt-lg-5 mt-3'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row-fluid'></div>
                </div>

                <div className='container-fluid part-1'></div>

                <div className='container-fluid part-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-7 col-20'>
                                <h2 className='mt-lg-5 mt-5 mb-lg-3 mb-3'>Resources</h2>
                                <p>Easily manage your inspiration and work-in-progress by dragging
                                    images into projects and sharable client groups. work-in-progress
                                     by dragging images into projects and sharable client group</p>
                            </div>
                            <div className='col-lg-8 col-20'>
                                <h2 className='mt-lg-5 mt-5 mb-lg-3 mb-3'>About us</h2>
                                <p>Easily manage your inspiration and work-in-progress by dragging
                                    images into projects and sharable client groups. work-in-progress
                                     by dragging images into projects and sharable client group</p>
                            </div>
                            <div className='col-lg-5 col-20 mb-2'>
                                <h2 className='mt-lg-5 mt-5 mb-lg-3 mb-3'>Stay in touch</h2>
                                <img src={require('../../images/icons/facebook.png')} />
                                <img src={require('../../images/icons/twitter.png')} />
                                <img src={require('../../images/icons/youtube.png')} />
                                <img src={require('../../images/icons/linkedin.png')} />
                            </div>
                        </div>

                        <div className='row no-gutters'>
                            <div className='col-lg-4 col-20 offset-lg-6 pb-2 pt-2'>
                                <input type='text' placeholder='Your Name' />
                            </div>
                            <div className='col-lg-6 col-20 pl-lg-2 pr-lg-2 pb-2 pt-2'>
                                <input type='text' placeholder='Your Email' />
                            </div>
                            <div className='col-lg-4 col-20 pb-2 pt-2'>
                                <input type='submit' value='Join Newsletter' />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;
