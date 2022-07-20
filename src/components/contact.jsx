import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.402015162326!2d79.90128984703962!3d6.789604093624152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f91d281cc5d%3A0xea4b2fcd3ce0e74e!2sPiliyandala!5e0!3m2!1sen!2slk!4v1657287665149!5m2!1sen!2slk"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: 3 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div id="footer" style={{ backgroundColor: "#dcdcdc" }}>
        <div className="container text-center">
          <div className="container ">
            <div className="col-md-12">
              <footer className="footer">
                <div className="row">
                  <div className="footer-col">
                    <div className="col-md-3">
                      <h4>Logo</h4>
                      <h5>________________</h5>
                      <ul>
                        <li>
                          <a href="#"></a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-col">
                      <div className="col-md-3">
                        <h4> Useful Links</h4>
                        <h5>_____________</h5>
                        <ul>
                          <p>
                            <a
                              href=""
                              className="service"
                              style={{ color: "#0000cd" }}
                            >
                              Services
                            </a>
                          </p>
                          <p>
                            <a
                              href="#vehicles"
                              className="#"
                              style={{ color: "#0000cd" }}
                            >
                              Vehicles
                            </a>
                          </p>
                          <p>
                            <a
                              href="#testimonials"
                              style={{ color: "#0000cd" }}
                            >
                              Testmonials
                            </a>
                          </p>
                          <p>
                            <a href="#team" style={{ color: "#0000cd" }}>
                              Our Staff
                            </a>
                          </p>
                          <p>
                            <a href="#about" style={{ color: "#0000cd" }}>
                              About
                            </a>
                          </p>
                          <p>
                            <a href="#about" style={{ color: "#0000cd" }}>
                              Contact
                            </a>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col">
                      <div className="col-md-3">
                        <h4>Working hours</h4>
                        <h5>___________________</h5>
                        <ul>
                          <li style={{ marginleft: "5rem", color: "#0000cd" }}>
                            Monday to Saturday
                          </li>
                          <li style={{ color: "		#696969" }}>9am to 7pm </li>
                          <br></br>
                          <li style={{ color: "#0000cd" }}>
                            Sunday and Holidays
                          </li>
                          <li style={{ color: "		#696969" }}>9am to 3pm</li>
                          <br></br>

                          <h4>Follow Us</h4>
                          <h5>______________</h5>
                          <div className="social">
                            <a href={props.data ? props.data.facebook : "/"}>
                              <i
                                className="fa fa-facebook"
                                style={{
                                  marginRight: "1rem",
                                  fontSize: "2rem",
                                }}
                              ></i>
                            </a>

                            <a href={props.data ? props.data.twitter : "/"}>
                              <i
                                className="fa fa-twitter "
                                style={{
                                  marginRight: "1rem",
                                  fontSize: "2rem",
                                }}
                              ></i>
                            </a>

                            <a href={props.data ? props.data.youtube : "/"}>
                              <i
                                className="fa fa-youtube"
                                style={{
                                  marginRight: "1rem",
                                  fontSize: "2.5rem",
                                }}
                              ></i>
                            </a>
                          </div>
                        </ul>
                      </div>

                      <div className="footer-col">
                        <div className="col-md-3">
                          <h4>Contact Info</h4>
                          <h5>_________________</h5>
                          <ul>
                            <p
                              style={{ marginLeft: "4.7rem", color: "#0000cd" }}
                            >
                              Hotline - 077123456/0775226321
                            </p>

                            <p
                              style={{ marginRight: "2rem", color: "#0000cd" }}
                            >
                              Landline - 0112736965
                            </p>
                            <p
                              style={{ marginLeft: "0.3rem", color: "#0000cd" }}
                            >
                              Email - Binary@gmail.com
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
