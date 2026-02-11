import Navbar from "./components/navbar";
import CarModelCard from "./components/carModelCard";

import carData from "./data/carData";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {carData.map((car, index) => (
          <CarModelCard
            key={index}
            model={car.model}
            image={car.image}
            parts={car.parts}
          />
        ))}
      </div>
    </>
  );
}
