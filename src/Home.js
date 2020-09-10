import React from 'react';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card.js';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home__section">
                <Card 
                src="https://www.confused.com/-/media/confused/articles/article-content-images/home-insurance/airbnb-city-rental-main.jpg?la=en-gb&hash=76F9B2DCDC3BE4B97D649B36F358A316AC3224BA"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                src="https://media.timeout.com/images/105154886/630/472/image.jpg"
                title="Online Experiences"
                description="Unique activities we can do 
                together, led by a world of hosts."
                />
                <Card 
                src="https://s.yimg.com/ny/api/res/1.2/KUYK6ZOs2boFWyP2LMQP6A--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/gobankingrates_644/70a9cf8b9fd2dcb91ed9ed3815e5dbc3"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
            </div>
            <div className="home__selection">
            <Card 
                src="https://s3-ap-southeast-1.amazonaws.com/bengkel/wp-content/uploads/2017/03/27114830/gravity-home-apartment.jpg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                src="https://www.lowestrates.ca/sites/default/files/Thursday-How-does-operating-Airbnb-affect-your-home-insurance-.jpg"
                title="Online Experiences"
                description="Unique activities we can do 
                together, led by a world of hosts."
                />
                <Card 
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/skiers-paradise-facing-mont-blanc-airbnb-plus-homes-1550247789.jpg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                />
            </div>
        </div>
    )
}

export default Home
