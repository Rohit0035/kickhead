import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % 5); // Adjust this number to match the number of divs
        }, 5000); // Adjust the time (5000ms) to control how long each div is shown

        return () => clearInterval(interval);
    }, []);

    // Event listener to restart from the first div when scrolled
    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                // Reset to the first div when reaching the bottom of the page
                setVisibleIndex(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="">
            {/* Div 1 */}
            <div className={`fade-in ${visibleIndex === 0 ? 'visible' : 'hidden'}`}>
                <h2 className='fs-2'>We’re the makers of the new
                    <span className='ms-2'>
                        <TypeAnimation
                            sequence={[
                                'thinking',
                                900,
                                'ideas',
                                900,
                                'possibilities',
                                900,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </h2>
            </div>

            {/* Div 2 */}
            <div className={`fade-in ${visibleIndex === 1 ? 'visible' : 'hidden'}`}>
                <h2>A startup-inspired challenger agency</h2>
            </div>

            {/* Div 3 */}
            <div className={`fade-in ${visibleIndex === 2 ? 'visible' : 'hidden'}`}>
                <h2>In the jungle of biz,<br/>
                    where the lions roar and unicorns run wild
                </h2>
                <h2>
                    Our mission is to build thriving brands with Unique Stripes
                </h2>
            </div>

            {/* Div 4 */}
            <div className={`fade-in ${visibleIndex === 3 ? 'visible' : 'hidden'}`}>
                <h2>Designed specifically to take businesses from</h2>
                <h1 className='heading-bold'>
                    x to 10X
                </h1>
            </div>

            {/* Div 5 */}
            <div className={`fade-in ${visibleIndex === 4 ? 'visible' : 'hidden'}`}>
                <h2>Offering behavioural science, creativity, and innovation using</h2>
                <h1 className='heading-bold'>
                    AUTHENTIC IMAGINATION<br/> Ai
                </h1>
            </div>
        </div>
    );
};

export default About;
