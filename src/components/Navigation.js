import React from 'react';

function Navigation (props) {
    const links =["About", "Resume", "Portfolio", "Contact"];

    return (
        <div className='links'>
            <ul className='nav nav-links'>
                {links.map((link) => (
                    <li
                        className={props.currentPage === link ? "nav-item is-active" : "nav-item"
                    }
                    key={link}
                    >
                    <a href={"#" + link.toLowerCase()}
                    // link is clicked on, current page is set through the handlePageChange props.
                    onClick={() => props.handlePageChange(link)}
                    className={
                        props.currentPage === link ? "nav-link active" : "nav-link"
                    }
                    >
                        {link}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;