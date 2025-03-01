import React from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./css/home.css";
const Home = () => {
  function handleClick() {
    console.log("Link clicked!");
  }

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Python Applications</i>,",
        "<i>Web Development</i>,",
        "<i>&amp; Ai/ML</i>.",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container flex">
        <div className="left">
          Hi, I am <span>Abhigyan Sengupta</span>.<div>I am a passionate in</div>
          <span ref={el} />
          <div className="btn">
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1ByCZOP9cxuYsNfP85UPAffDFSufNP_G1/view?usp=sharing",
                  "_blank"
                );
              }}
              className="btn-1"
            >
              View Resume
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/CazzGuy?tab=repositories",
                  "_blank"
                )
              }
              className="btn-2"
            >
              Visit Github
            </button>
          </div>
        </div>

        <div className="right">
          <img
            src="https://thumbs.dreamstime.com/z/coder-black-flat-design-graphic-concept-coder-icon-programming-languages-laptop-icon-white-background-126014938.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
