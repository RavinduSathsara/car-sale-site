import { Image } from "./image";
import VehicleCard from "./VehicleCard";
import useFetch from "../hooks/useFetch";

export const Vehicles = (props) => {
  const { data, isLoading } = useFetch("http://127.0.0.1:8000/api/vehicles");

  return (
    <div id="vehicles" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Vehicles</h2>
        </div>
        <div className="container">
          {data?.Vehicle.map((item) => (
            <VehicleCard
              brand={item.brand}
              image={item.v_image}
              model={item.model}
              yom={item.year_manufacture}
              mileage={item.mileage}
              price={item.unit_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
