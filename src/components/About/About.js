import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
    return (
        <div className='about-info'>
            <p>Customer's satisfaction is our goal  </p> <Link to="/"><button className='gohome-btn'>Go Home</button></Link>

            <div><p>We are trying best facilities to the users to make sure the user's need</p>

                <h2>About Our Business</h2></div>
            <p>“It is a web-based online machine fluid (fuels and oils) selling service in which people of any type can
                buy their required fluid type products for machines. Such machines need oil for their smaller mechanical parts to remain active.”</p>
        </div>
    );
};

export default About;