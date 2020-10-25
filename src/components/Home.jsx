import React from 'react'
import web from '../images/d3.jpg'
import {NavLink} from 'react-router-dom'
import Common from './Common'

const Home = () => {
    return (
        <>
        <Common name = "Grow your business with " btn="Click to Explore" visit="/service" img = {web}
        info = "We accumulate every essential information and incorporates ideas and strategies in a structured way to shape up your business module."/>
        
        </>
    );
};
export default Home