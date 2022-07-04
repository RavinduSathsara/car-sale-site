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
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
