import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const SwapDeal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [cusMake, setCusMake] = useState("");
  const [cusBrand, setCusBrand] = useState("");
  const [cusModel, setCusModel] = useState("");
  const [cusYearManufacture, setCusYearManufacture] = useState("");
  const [yearRegistration, setYearRegistration] = useState("");
  const [cusOwnership, setCusOwnership] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [cusFuelType, setCusFuelType] = useState("");
  const [mileage, setMileage] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [ownership, setOwnership] = useState("");
  const [yearManufacture, setYearManufacture] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/swapvehicle", {
        name: `${name}`,
        contact: `${contact}`,
        email: `${email}`,
        profession: `${profession}`,
        address: `${address}`,
        cus_make: `${cusMake}`,
        cus_brand: `${cusBrand}`,
        cus_model: `${cusModel}`,
        cus_year_manufacture: `${cusYearManufacture}`,
        year_registration: `${yearRegistration}`,
        cus_ownership: `${cusOwnership}`,
        chassis_no: `${chassisNo}`,
        cus_fuel_type: `${cusFuelType}`,
        mileage: `${mileage}`,
        remarks: `${remark}`,
        brand: `${brand}`,
        model: `${model}`,
        make: `${make}`,
        ownership: `${ownership}`,
        year_manufacture: `${yearManufacture}`,
        fuel_type: `${fuelType}`,
        decision: 0,
      })
      .then(() => {
        Swal.fire(`Swap deal Added !  `, "Successfuly!", "success");
      })

      .catch((e) => {
        Swal.fire({
          text: e.response.data.message,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Decline",
        });
      });
  };
  const handleReset = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setContact("");
    setProfession("");
    setAddress("");
    setCusMake("");
    setCusBrand("");
    setCusModel("");
    setCusYearManufacture("");
    setYearRegistration("");
    setCusOwnership("");
    setChassisNo("");
    setCusFuelType("");
    setMileage("");
    setRemark("");
    setBrand("");
    setModel("");
    setMake("");
    setOwnership("");
    setYearManufacture("");
    setFuelType("");
  };
  return (
    <div>
      {" "}
      <div>
        <div id="contact">
          <div className="section-title" style={{ textAlign: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: "4rem",
              }}
            >
              SWAP DEAL
            </p>
          </div>

          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-xs-12 col-md-6">
                <img
                  src="img/swapdeal.jpg"
                  className="img-responsive"
                  alt=""
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <div style={{ marginLeft: "50px" }}>
                  <h2>Description</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam sint, consectetur facere ex sapiente, asperiores,
                    dolorem velit minima eos animi vel! Est exercitationem
                    temporibus facilis excepturi iure aut atque ipsa?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ marginTop: "15px" }}>
            <div className="col-md-7">
              <div className="row">
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "98px",
                    fontSize: "35px",
                  }}
                >
                  Personal
                </h3>
                <form onSubmit={handleSubmit} onReset={handleReset}>
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          className="form-control"
                          placeholder="Contact"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="profession"
                          name="profession"
                          className="form-control"
                          placeholder="Profession"
                          required
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="cusMake"
                          name="cusMake"
                          className="form-control"
                          placeholder="Customer Make"
                          required
                          value={cusMake}
                          onChange={(e) => setCusMake(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="cusBrand"
                          name="cusBrand"
                          className="form-control"
                          placeholder="Customer Brand"
                          required
                          value={cusBrand}
                          onChange={(e) => setCusBrand(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="cusModel"
                          name="cusModel"
                          className="form-control"
                          placeholder="Customer Model"
                          required
                          value={cusModel}
                          onChange={(e) => setCusModel(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="cusOwnership"
                          name="cusOwnership"
                          className="form-control"
                          placeholder="Customer Ownership"
                          required
                          value={cusOwnership}
                          onChange={(e) => setCusOwnership(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="chassisNo"
                          name="chassisNo"
                          className="form-control"
                          placeholder="Chassis No"
                          required
                          value={chassisNo}
                          onChange={(e) => setChassisNo(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="cusFuelType"
                          name="cusFuelType"
                          className="form-control"
                          placeholder="Customer Fuel Type"
                          required
                          value={cusFuelType}
                          onChange={(e) => setCusFuelType(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          id="cusYearManufacture"
                          name="cusYearManufacture"
                          className="form-control"
                          placeholder="Customer Year Manufacture"
                          value={cusYearManufacture}
                          onChange={(e) =>
                            setCusYearManufacture(e.target.value)
                          }
                        />

                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          id="yearRegistration"
                          name="YearRegistration"
                          className="form-control"
                          placeholder="Year Registration"
                          value={yearRegistration}
                          onChange={(e) => setYearRegistration(e.target.value)}
                        />

                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          id="mileage"
                          name="mileage"
                          className="form-control"
                          placeholder="Mileage"
                          value={mileage}
                          onChange={(e) => setMileage(e.target.value)}
                        />

                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div id="success"></div>
                </form>
              </div>
            </div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="col-md-4 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "80px",
                      fontSize: "35px",
                    }}
                  >
                    Expecting
                  </h3>
                </div>
                <div className="contact-item" style={{ marginTop: "43px" }}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="brand"
                          name="brand"
                          className="form-control"
                          placeholder="Brand"
                          required
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="model"
                          name="model"
                          className="form-control"
                          placeholder="Model"
                          required
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="make"
                          name="make"
                          className="form-control"
                          placeholder="Make"
                          required
                          value={make}
                          onChange={(e) => setMake(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="ownership"
                          name="ownership"
                          className="form-control"
                          placeholder="Ownership"
                          required
                          value={ownership}
                          onChange={(e) => setOwnership(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="fuelType"
                          name="fuelType"
                          className="form-control"
                          placeholder="Fueltype"
                          required
                          value={fuelType}
                          onChange={(e) => setFuelType(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          id="yearManufacture"
                          name="yearManufacture"
                          className="form-control"
                          placeholder="Year Manufacture"
                          value={yearManufacture}
                          onChange={(e) => setYearManufacture(e.target.value)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              {" "}
              <div className="form-group">
                <textarea
                  style={{ height: "80px" }}
                  name="remark"
                  id="remark"
                  className="form-control"
                  rows="4"
                  placeholder="Remark"
                  required
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                ></textarea>
                <div>
                  {" "}
                  <button type="submit" className="btn btn-custom btn-lg">
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-custom btn-lg"
                    style={{ marginLeft: "5px" }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapDeal;
