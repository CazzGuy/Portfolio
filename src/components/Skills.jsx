import React from "react";
import "./css/skills.css";

const Skills = () => {
  return (
    <>
      <h1 id="h1">Skills</h1>
      <div className="skills">
        <div className="card">
          <h1>Python</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit soluta
            optio minus repellendus earum eaque recusandae asperiores
            accusantium ullam, veritatis, nemo blanditiis reiciendis, deleniti
            nam consectetur nesciunt eveniet molestiae fugiat saepe vitae! Ad
            repellendus praesentium quo ea, quas harum vel fugit? Est excepturi
            rerum id!
          </p>
        </div>
        <div className="card">
          <h1>Java</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit soluta
            optio minus repellendus earum eaque recusandae asperiores
            accusantium ullam, veritatis, nemo blanditiis reiciendis, deleniti
            nam consectetur nesciunt eveniet molestiae fugiat saepe vitae! Ad
            repellendus praesentium quo ea, quas harum vel fugit? Est excepturi
            rerum id!
          </p>
        </div>
        <div className="card">
          <h1>Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit soluta
            optio minus repellendus earum eaque recusandae asperiores
            accusantium ullam, veritatis, nemo blanditiis reiciendis, deleniti
            nam consectetur nesciunt eveniet molestiae fugiat saepe vitae! Ad
            repellendus praesentium quo ea, quas harum vel fugit? Est excepturi
            rerum id!
          </p>
        </div>
      </div>
      <div className="projects">
        <div>
          <h1>Projects</h1>
          <div className="cards">
            <div className="card">
              <h1>License Plate Number Detection</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit soluta iusto quam ducimus, dicta totam explicabo,
                rerum, laboriosam dolor distinctio nulla. Dolores, nostrum!
              </p>
              <button onClick={() => {
                window.open(
                  "https://github.com/CazzGuy/License-Plate",
                  "_blank"
                );
              }}>SHOW MORE</button>
            </div>
            <div className="card">
            <h1>Java Banking Applications</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit soluta iusto quam ducimus, dicta totam explicabo,
                rerum, laboriosam dolor distinctio nulla. Dolores, nostrum!
              </p>
              <button onClick={()=>{
                window.open(
                  "https://github.com/CazzGuy/Banking-Management-System",
                  "_blank" 
                );
              }}>SHOW MORE</button>
            </div>
            <div className="card">
            <h1>Spotify Clone</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit soluta iusto quam ducimus, dicta totam explicabo,
                rerum, laboriosam dolor distinctio nulla. Dolores, nostrum!
              </p>
              <button onClick={()=>{
                window.open(
                  "https://github.com/CazzGuy/Spotify-clone",
                  "_blank" 
                );
              }}>SHOW MORE</button>
            </div>
            <div className="card">
            <h1>Job Portal</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit soluta iusto quam ducimus, dicta totam explicabo,
                rerum, laboriosam dolor distinctio nulla. Dolores, nostrum!
              </p>
              <button button onClick={()=>{
                window.open(
                  "https://github.com/CazzGuy/ToDo",
                  "_blank" 
                );
              }}>SHOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
