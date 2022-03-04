import React from "react";

function Project(props) {
    return (
        <div>
        <div className="columns columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
            {props.projects.map((project) => (
            <div className="column is-half">
                <div className="card">
        
                <div className="card-content">
                    <div className="media">
                        <p className="title is-4" key={project.id}>
                        {project.title}
                        </p>
                        <hr />
                    </div>

                    <div className="content has-text-left">
                    {project.description}
                    <br />
                    <br />
                    <div className="content is-family-code">
                        <strong>Languages:</strong> {project.languages}
                        <br />
                        <br />
                        <strong>NPM Packages:</strong> {project.packages}
                    <br />
                    <br />
                    </div>
                    <div className="card">
                        <footer className="card-footer">
                        <a
                            href={project.repo}
                            className="card-footer-item"
                            target="_blank" rel="noreferrer"
                        >
                            <strong>Check out the Repo!</strong>
                        </a>
                        <br />
                        <a 
                            href={project.live}
                            className="card-footer-item"
                            target="_blank" rel="noreferrer"
                        >
                            <strong>Visit Live Application!</strong>
                        </a>
                        <br />
                        <div className="card-image">
                            <figure>
                            <a className= "pro-image" target="_blank" rel="noreferrer">
                                <img src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                            </a>
                            </figure>
                            <br />
                        </div>
                        
                        </footer>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Project;