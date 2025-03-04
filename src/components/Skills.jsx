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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium culpa rem saepe odit sed fuga quo. Earum dolorem
                  dolor, assumenda animi maxime quam. Quam amet velit tenetur
                  reprehenderit deleniti culpa facere tempore, officiis
                  voluptatibus, ut corporis, quaerat ab. Doloribus, est nisi
                  quas aspernatur iste facere hic beatae officiis provident.
                  Possimus ut voluptatem, non atque beatae quod sequi amet dolor
                  accusantium maxime eum, consequatur libero expedita, animi ad
                  numquam. Explicabo, tempora!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Java</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  nesciunt, itaque unde illum, culpa minus, quisquam
                  necessitatibus blanditiis ratione error magni aliquam veniam
                  iure impedit id dolore? Aperiam, nobis, soluta aspernatur
                  expedita laboriosam libero quas facilis enim, saepe obcaecati
                  quia. Corrupti, fugit unde laudantium cumque expedita beatae
                  vero, fugiat quisquam, quibusdam commodi dolor harum placeat
                  nobis libero provident alias natus amet fuga voluptate sint
                  delectus debitis. Voluptatibus sed expedita sint.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <h1>Web Development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae accusantium cum facilis aliquam doloribus sunt, quae
                  tempore eligendi odio ducimus totam doloremque animi dolores
                  obcaecati eos, eius possimus, exercitationem enim. Quidem
                  dolorem nemo amet inventore nulla at esse quae voluptas
                  officiis, molestias reiciendis! Reiciendis mollitia pariatur
                  labore eum fugit et. Et, doloremque ducimus nisi debitis
                  corporis natus nostrum, voluptates dolores itaque officiis
                  perspiciatis enim esse harum asperiores? Magnam, quidem cum?
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium culpa rem saepe odit sed fuga quo. Earum dolorem
                dolor, assumenda animi maxime quam. Quam amet velit tenetur
                reprehenderit deleniti culpa facere tempore, officiis
                voluptatibus, ut corporis, quaerat ab. Doloribus, est nisi quas
                aspernatur iste facere hic beatae officiis provident. Possimus
                ut voluptatem, non atque beatae quod sequi amet dolor
                accusantium maxime eum, consequatur libero expedita, animi ad
                numquam. Explicabo, tempora!
              </p>
            </div>
            <div className="card">
              <h1>Java</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                nesciunt, itaque unde illum, culpa minus, quisquam
                necessitatibus blanditiis ratione error magni aliquam veniam
                iure impedit id dolore? Aperiam, nobis, soluta aspernatur
                expedita laboriosam libero quas facilis enim, saepe obcaecati
                quia. Corrupti, fugit unde laudantium cumque expedita beatae
                vero, fugiat quisquam, quibusdam commodi dolor harum placeat
                nobis libero provident alias natus amet fuga voluptate sint
                delectus debitis. Voluptatibus sed expedita sint.
              </p>
            </div>
            <div className="card">
              <h1>Web Development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                accusantium cum facilis aliquam doloribus sunt, quae tempore
                eligendi odio ducimus totam doloremque animi dolores obcaecati
                eos, eius possimus, exercitationem enim. Quidem dolorem nemo
                amet inventore nulla at esse quae voluptas officiis, molestias
                reiciendis! Reiciendis mollitia pariatur labore eum fugit et.
                Et, doloremque ducimus nisi debitis corporis natus nostrum,
                voluptates dolores itaque officiis perspiciatis enim esse harum
                asperiores? Magnam, quidem cum?
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum similique ea assumenda nemo id exercitationem totam
                  enim quo dolorem dolor.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum similique ea assumenda nemo id exercitationem totam
                  enim quo dolorem dolor.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum similique ea assumenda nemo id exercitationem totam
                  enim quo dolorem dolor.
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
                <h1>Job Portal</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum similique ea assumenda nemo id exercitationem totam
                  enim quo dolorem dolor.
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
          </Swiper>
        </div>

        <div className="desktop-only">
          <div className="projects-grid">
            <div className="card">
              <h1>License Plate Detection</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                nam et itaque ut voluptates error corporis beatae eveniet
                nostrum. Ex.
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae beatae eveniet excepturi dolorum vero molestiae
                magni architecto optio. Nihil, odit.
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                ipsam modi explicabo. Error inventore illum hic beatae culpa,
                nisi mollitia..
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
              <h1>Job Portal</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum similique ea assumenda nemo id exercitationem totam
                enim quo dolorem dolor.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
