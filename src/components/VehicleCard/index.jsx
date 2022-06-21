import React from "react";

const VehicleCard = ({ brand, image, model, yom, mileage, price }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="Avatar"
          style={{ width: "100%", height: "240px" }}
        />
        <div>
          <h4>
            <b>{brand}</b>
          </h4>
          <p>Model : {model}</p>
          <p>Year Of Manufacture : {yom}</p>
          <p>Mileage : {mileage}</p>
          <p>Price : {price}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
