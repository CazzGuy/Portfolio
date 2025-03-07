import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/skills.css";

const Skills = () => {
  return (
    <>
      <h1 id="h1">Skills</h1>
      <div className="skills-container">
        {/* Swiper for Mobile Only */}
        <div className="mobile-only">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="skills-swiper"
          >
            <SwiperSlide>
              <div className="card">
                <h1>Python</h1>
                <p>
                  Python is a versatile, high-level programming language known
                  for its simplicity and readability. It is widely used in web
                  development, data science, machine learning, automation, and
                  software development. With a vast ecosystem of libraries like
                  NumPy, Pandas, TensorFlow, and Django, Python enables
                  efficient coding and problem-solving. Its strong community
                  support and cross-platform compatibility make it an ideal
                  choice for beginners and professionals alike, empowering
                  developers to build scalable and innovative solutions
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Java</h1>
                <p>
                  Java is a powerful, object-oriented programming language known
                  for its platform independence, scalability, and security.
                  Widely used in web development, mobile applications,
                  enterprise software, and backend systems, Java offers strong
                  memory management and multithreading capabilities. With
                  frameworks like Spring and Hibernate, it enables efficient
                  development. Its write-once, run-anywhere feature makes it a
                  top choice for developers worldwide. Java is ideal for
                  building robust and high-performance applications.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Web Development</h1>
                <p>
                  Web development involves designing, building, and maintaining
                  websites and web applications. It includes front-end
                  development using HTML, CSS, JavaScript, and frameworks like
                  React.js, and back-end development with Node.js, MySQL, and
                  APIs. A well-developed website ensures seamless user
                  experience, responsiveness, and performance. With my expertise
                  in full-stack development, I create scalable, efficient, and
                  interactive web solutions tailored to modern digital needs.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Static Cards for Laptop */}
        <div className="desktop-only">
          <div className="skills-grid">
            <div className="card">
              <h1>Python</h1>
              <p>
                Python is a versatile, high-level programming language known for
                its simplicity and readability. It is widely used in web
                development, data science, machine learning, automation, and
                software development. With a vast ecosystem of libraries like
                NumPy, Pandas, TensorFlow, and Django, Python enables efficient
                coding and problem-solving. Its strong community support and
                cross-platform compatibility make it an ideal choice for
                beginners and professionals alike, empowering developers to
                build scalable and innovative solutions
              </p>
            </div>
            <div className="card">
              <h1>Java</h1>
              <p>
                Java is a powerful, object-oriented programming language known
                for its platform independence, scalability, and security. Widely
                used in web development, mobile applications, enterprise
                software, and backend systems, Java offers strong memory
                management and multithreading capabilities. With frameworks like
                Spring and Hibernate, it enables efficient development. Its
                write-once, run-anywhere feature makes it a top choice for
                developers worldwide. Java is ideal for building robust and
                high-performance applications.
              </p>
            </div>
            <div className="card">
              <h1>Web Development</h1>
              <p>
                Web development involves designing, building, and maintaining
                websites and web applications. It includes front-end development
                using HTML, CSS, JavaScript, and frameworks like React.js, and
                back-end development with Node.js, MySQL, and APIs. A
                well-developed website ensures seamless user experience,
                responsiveness, and performance. With my expertise in full-stack
                development, I create scalable, efficient, and interactive web
                solutions tailored to modern digital needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 id="h1">Projects</h1>
      <div className="projects-container">
        <div className="mobile-only">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className="projects-swiper"
          >
            <SwiperSlide>
              <div className="card">
                <h1>License Plate Detection</h1>
                <p>
                  Developed a Python-based license plate detection system.
                  Action: Utilized NumPy, EasyOCR, and Pandas for image
                  processing and text extraction. Result: Enabled automated
                  monitoring of traffic violations and illegal parking.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/CazzGuy/License-Plate",
                      "_blank"
                    )
                  }
                >
                  SHOW MORE
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Banking System</h1>
                <p>
                  Created a Java-based banking system for streamlined financial
                  operations. Action: Integrated MySQL for account management,
                  transactions, and record-keeping. Result: Enhanced banking
                  efficiency with structured data handling.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/CazzGuy/Banking-Management-System",
                      "_blank"
                    )
                  }
                >
                  SHOW MORE
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Spotify Clone</h1>
                <p>
                  Developed a fully functional web-based music streaming
                  platform. Action: Designed and implemented the interface using
                  HTML, CSS, and JavaScript, ensuring responsiveness and
                  interactive features similar to Spotify.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/CazzGuy/Spotify-clone",
                      "_blank"
                    )
                  }
                >
                  SHOW MORE
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Job Portal</h1>
                <p>
                Developed a React-based Job Portal to connect job seekers with
                employers. Features include job listings, user authentication,
                resume uploads, and application tracking ensuring seamless,
                 job search experience
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://github.com/CazzGuy/Job-Portal",
                      "_blank"
                    )
                  }
                >
                  SHOW MORE
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="desktop-only">
          <div className="projects-grid">
            <div className="card">
              <h1>License Plate Detection</h1>
              <p>
                Developed a Python-based license plate detection system. Action:
                Utilized NumPy, EasyOCR, and Pandas for image processing and
                text extraction. Result: Enabled automated monitoring of traffic
                violations and illegal parking.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/CazzGuy/License-Plate",
                    "_blank"
                  )
                }
              >
                SHOW MORE
              </button>
            </div>
            <div className="card">
              <h1>Banking System</h1>
              <p>
                Created a Java-based banking system for streamlined financial
                operations. Action: Integrated MySQL for account management,
                transactions, and record-keeping. Result: Enhanced banking
                efficiency with structured data handling.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/CazzGuy/Banking-Management-System",
                    "_blank"
                  )
                }
              >
                SHOW MORE
              </button>
            </div>
            <div className="card">
              <h1>Spotify Clone</h1>
              <p>
                Developed a fully functional web-based music streaming platform.
                Action: Designed and implemented the interface using HTML, CSS,
                and JavaScript, ensuring responsiveness and interactive features
                similar to Spotify.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/CazzGuy/Spotify-clone",
                    "_blank"
                  )
                }
              >
                SHOW MORE
              </button>
            </div>
            <div className="card">
              <h1>Job Portal</h1>
              <p>
                Developed a React-based Job Portal to connect job seekers with
                employers. Features include job listings, user authentication,
                resume uploads, and application tracking ensuring seamless,
                 job search experience
              </p>
              <button
                onClick={() =>
                  window.open("https://github.com/CazzGuy/Job-Portal", "_blank")
                }
              >
                SHOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
