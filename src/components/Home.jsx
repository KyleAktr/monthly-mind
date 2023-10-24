import React, { } from 'react';
import {Link} from 'react-scroll'

const Home = () => {


    return (
        <div className='home'>
            <div className="title-container">
                <h1>Monthly Mind</h1>
                <h2>"Balade à Vaisseau"</h2>
                <button>
                    <Link to="questions" spy={true} smooth={true} offset={50} duration={500}>Commencer</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;