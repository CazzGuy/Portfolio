import React from "react";
import "./css/contact.css";
import { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "eb099eff-da71-42cf-8b39-0600502a0018");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: `🎉 Thank you, ${object.name}! Your message has been sent.`,
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({ name: "", email: "", msg: "" });
      } else {
        Swal.fire("Oops!", "Something went wrong. Try again later.", "error");
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        "Network issue. Please check your connection.",
        "error"
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="contact flex">
          <div className="c-card">
            <h1>Contact me</h1>
            <div className="input">
              <label>Full Name</label>
              <input
                type="text"
                className="field"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <label>Email Address</label>
              <input
                type="email"
                className="field"
                placeholder="Enter your Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <label>Message</label>
              <textarea
                type="msg"
                className="field msg"
                placeholder="Enter your Message"
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
      ;
    </>
  );
};

export default Contact;
