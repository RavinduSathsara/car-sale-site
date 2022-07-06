import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";

export const Features = (props) => {
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/api/currentvisits", {
      current_visits: 1,
      month: moment(Date.now()).format("M"),
    });
  }, []);

  return (
    <div id="features" className="text-center text-block">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Why</h2>
            <div className="col-xs-12 col-md-6" style={{ marginTop: "15px" }}>
              {" "}
              <img src="img/cars.jpg" className="img-responsive" alt="" />{" "}
            </div>{" "}
            <div className="col-xs-12 col-md-6" style={{ marginTop: "15px" }}>
              <h6>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                qui voluptatem dignissimos! Et accusantium quis veritatis.
                Suscipit et vel beatae sunt debitis necessitatibus ducimus
                obcaecati. Cupiditate deserunt officia dolore ullam.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
