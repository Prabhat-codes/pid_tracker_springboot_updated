import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div className="card" style={{ width:"500px",backgroundColor: "white", padding: "20px", borderRadius: "10px", textAlign: "center", borderColor: "black", alignItems: "center",fontSize:"large" }}>
                    <h2>About</h2>
                    <p> This project aims to develop a PID tool using ReactJS, Spring Boot, and NodeJS technologies.
                        The tool will help in controlling the parameters of a system in a closed-loop manner, making the system more efficient and stable.
                        The project follows the Agile methodology and involves several iterations to develop the software in an incremental and iterative manner.
                        The development process is carried out using GitHub, allowing for version control and collaboration among team members.</p>
                </div>
            </div>
        </div>
    );
}

export default About;