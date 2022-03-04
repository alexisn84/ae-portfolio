import React from 'react';

function About () {

    return(
        <div className='content'>
            <img className='my-pic' src={process.env.PUBLIC_URL + '/img/ae-profile.jpg'} alt="Alexis"/>
            <br/>
            <br />
            <p className='content is-medium'> In 2021 I made a bold career move from Accounting to
                being a Software Engineer. I am fortunate that in my lifetime, so far, I have found
                two things that I not only love but excel at.
            </p>
            {/* <hr /> */}
            
            
        </div>
    );
}


export default About;
