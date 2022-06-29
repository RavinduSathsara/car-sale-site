import { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const initialState = {
  name: "",
  contact: "",
  email: "",
  profession: "",
  address: "",
  cusRequestDate: "",
  make: "",
  brand: "",
  model: "",
  payment: "",
  insurance: "",
  remarks: "",
};
export const Inquiry = (props) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [cusRequestDate, setCusRequestDate] = useState("");
  const [make, setMake] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [payment, setPayment] = useState("");
  const [insurance, setInsurance] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleReset = (event) => {
    event.preventDefault();
    setName("");
    setContact("");
    setEmail("");
    setProfession("");
    setAddress("");
    setCusRequestDate("");
    setMake("");
    setBrand("");
    setModel("");
    setPayment("");
    setInsurance("");
    setRemarks("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/vehicle_inquiry", {
        name: `${name}`,
        contact: `${contact}`,
        email: `${email}`,
        profession: `${profession}`,
        address: `${address}`,
        cus_req: `2022-02-08 10:20`,
        make: `${make}`,
        brand: `${brand}`,
        model: `${model}`,
        payment: `${payment}`,
        insurance: `${insurance}`,
        remarks: `${remarks}`,
      })
      .then(alert("Inquiry added"))
      .catch((e) => {
        alert(e.response.data.message);
      })
      .then(alert("Inquiry added"))
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  // setName("");
  // setContact("");
  // setEmail("");
  // setProfession("");
  // setAddress("");
  // setCusRequestDate("");
  // setMake("");
  // setBrand("");
  // setModel("");
  // setPayment("");
  // setInsurance("");
  // setRemarks("");

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/a.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="section-title">
                <h2>Description</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="section-title">
              <h2>Inquiry</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>

            <form
              name="inquiry"
              validate
              onSubmit={handleSubmit}
              align="center"
            >
              <div className="row" align="center">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="number"
                      id="contact"
                      value={contact}
                      name="contact"
                      className="form-control"
                      placeholder="Contact"
                      required
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      margin-top="25px"
                      type="text"
                      id="profession"
                      value={profession}
                      name="profession"
                      className="form-control"
                      placeholder="Profession"
                      required
                      onChange={(e) => setProfession(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="address"
                      value={address}
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="datetime-local"
                      id="cusRequestDate"
                      name="cusRequestDate"
                      //value="2018-06-12T19:30"
                      className="form-control"
                      placeholder="Select Date"
                      onChange={(e) => setCusRequestDate(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="make"
                      value={make}
                      name="make"
                      className="form-control"
                      placeholder="Make"
                      required
                      onChange={(e) => setMake(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="brand"
                      value={brand}
                      name="brand"
                      className="form-control"
                      placeholder="Brand"
                      required
                      onChange={(e) => setBrand(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="model"
                      value={model}
                      name="model"
                      className="form-control"
                      placeholder="Model"
                      required
                      onChange={(e) => setModel(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="payment"
                      value={payment}
                      name="payment"
                      className="form-control"
                      placeholder="Payment"
                      required
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      id="insurance"
                      value={insurance}
                      name="insurance"
                      className="form-control"
                      placeholder="Insurance"
                      required
                      onChange={(e) => setInsurance(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="remarks"
                  id="remarks"
                  value={remarks}
                  className="form-control"
                  rows="4"
                  placeholder="Remarks"
                  required
                  onChange={(e) => setRemarks(e.target.value)}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
