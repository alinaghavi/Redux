import React from 'react';

const RainBow = (WrappedComponent) => {
    const colours = ['red', 'blue', 'green', 'pink', 'yellow', 'maroon', 'brown'];
    const randomColor = colours[Math.floor(Math.random() * 6)];
    const className = randomColor + '-text';
    return (props) => {
        return (
            <div className={className} >
                <WrappedComponent {...props} />
            </div>
        )
    }
};

export default RainBow;