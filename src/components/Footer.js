import React from 'react';

function Footer() {

        return (

        <footer className="footer">
            <div className="content">
                <p >
                <strong>My Full Stack Developer Portfolio</strong> 
                <a className="git" href="https://github.com/alexisn84" target="_blank" rel="noreferrer">
                    {''}{''} Alexis El Amrani
                </a>
                .
                <br />
            
                <a className="git"
                    href="https://www.linkedin.com/in/alexis-el-amrani-36b34729"
                    target="_blank" rel="noreferrer"
                >
                    LinkedIn
                </a>{" "}
                
                </p>
            </div>
            </footer>
        );
}

export default Footer;