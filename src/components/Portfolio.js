import React from 'react';
import Project from './Project';

//build const to hold info for each card
const projects = [
    {
        id: 0,
        title: "Squeaky Cleaners",
        image: "/img/squeaky.png",
        languages: "MySQL, REST APIs, JS, CSS, Express",
        packages: "Express.js, MySQL2, Sequelize, dotenv, bcrypt, express-handlebars, express-session, connect-express-sequelize, jawsDB",
        description: "A full stack application that allows users to select a maid and view the reviews of their services. In addition the user when logged in may also leave a review for maids that have provided cleaning services. ",
        repo: "https://github.com/ivydo/Squeaky-Cleaners/tree/feature/alexis",
        live: "https://peaceful-savannah-34816.herokuapp.com/"
    },
    {
        id: 1,
        title: "Pricemart",
        image: "/img/price.jpg",
        languages: "HTML, CSS-Bulma, JavaScript, JQuery and 2 external API servers",
        packages: "",
        description:"A web browser application that compares pricing for items at local retailers, as well as shows the distance from the user to the store so that the user can take into consideration time and travel costs. User can then build shopping lists for each retailer and print or email lists for use at while shopping.",
        repo: "https://github.com/msdale/caffeine-overflow",
        live: "https://msdale.github.io/caffeine-overflow/"
    },
];

function Portfolio () {    

    return (
        <div>
            <p className='port-title'>Portfolio</p>
            <hr />
            <br />
            <br />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;