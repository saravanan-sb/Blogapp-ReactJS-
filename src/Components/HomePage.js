import React from 'react';
import Hero from './Hero';
import Main from './Main';

const HomePage = ({ blogs }) => {
    return (
        <div>
            <Hero />
            <Main blogs={blogs} />
        </div>
    );
}

export default HomePage;
