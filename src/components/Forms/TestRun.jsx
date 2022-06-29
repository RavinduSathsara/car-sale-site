import { useState } from "react";

const TestRun = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [cus_req, setCus_req] = useState("");
  const [make, setMake] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [ownership, setOwnership] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div id="contact">
        <div className="section-tittle" style={{ textAlign: "center" }}>
          <p style={{ fontweight: "bold", fontSize: "4rem", marginTop: "1px" }}>
            Test Run
          </p>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-xs-12 col-md-6">
              <img src="img/a.jpg" className="img-responsive" alt="" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div style={{ marginLeft: "50px" }}>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae possimus laborum voluptas in vitae voluptatum
                  similique porro earum? Labore corrupti voluptatibus beatae
                  tenetur porro aliquid in nihil quibusdam doloribus ut?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-md-4">
            <div className="row">
              <h3 style={{ textAlign: "center", marginTop: "98px" }}>
                Personal
              </h3>
              <form name="sent message " validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  <div className="col-md-12">
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
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="Profession"
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
              </form>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Submit
              </button>
            </div>
          </div>
          <form>
            <div className="col-md-4 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3 style={{ textAlign: "center" }}>Vehicle</h3>
              </div>
              <div className="contact-item" style={{ marginTop: "40px" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="cus_req"
                            name="cus_req"
                            className="form-control"
                            placeholder="Cus-Req"
                            required
                            value={cus_req}
                            onChange={(e) => setCus_req(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
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
                            type="datetime-local"
                            id="datetime"
                            name="datetime"
                            className="form-control"
                            placeholder=""
                            required
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="cus_req"
                            name="cus_req"
                            className="form-control"
                            placeholder="Cus-Req"
                            required
                            value={cus_req}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestRun;
