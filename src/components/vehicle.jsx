import { Image } from "./image";
import VehicleCard from "./VehicleCard";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export const Vehicles = (props) => {
  const { data, isLoading } = useFetch("http://127.0.0.1:8000/api/vehicles");
  const [makeFilter, setMakeFilter] = useState("");

  const cars = data?.Vehicle.filter((car) => {
    return car.make === "Car";
  });

  const jeep = data?.Vehicle.filter((jeep) => {
    return jeep.make === "Jeep";
  });

  const vans = data?.Vehicle.filter((van) => {
    return van.make === "Van";
  });

  return (
    <div id="vehicles" className="text-center">
      <button
        onClick={() => {
          setMakeFilter("Car");
        }}
      >
        Car
      </button>
      <button
        onClick={() => {
          setMakeFilter("Van");
        }}
      >
        Van
      </button>
      <button
        onClick={() => {
          setMakeFilter("Jeep");
        }}
      >
        Jeep
      </button>
      <div className="container">
        <div className="section-title">
          <h2>Vehicles</h2>
        </div>
        <div className="container">
          {makeFilter === ""
            ? data?.Vehicle.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Car"
            ? cars.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Jeep"
            ? jeep.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Van"
            ? vans.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
