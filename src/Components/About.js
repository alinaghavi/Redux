import React from 'react';
import RainBow from '../HOC/RainBow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto consectetur, corporis cupiditate dicta error est expedita ipsam magni odit omnis, quam rerum tempora velit voluptatibus. Adipisci assumenda consequatur temporibus.</p>
        </div>
    );
};

export default RainBow(About);