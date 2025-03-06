import React from "react";
import "./css/about.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="text">
          <h1>Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptatem dolorum incidunt quis, deleniti quisquam ratione quod
            labore praesentium itaque corrupti repellendus porro. Non
            perspiciatis animi qui asperiores. Hic, iste. Libero quidem qui sunt
            assumenda recusandae magni doloremque commodi doloribus sint
            repellendus deleniti ipsam temporibus iusto sequi repudiandae,
            consectetur provident!
          </p>
        </div>
        <div className="image">
          <img
            className="img"
            src="https://drive.google.com/file/d/1SAh1RFd0_NtWe6DfINBsatBeRD_WMF5c/view?usp=sharing"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
