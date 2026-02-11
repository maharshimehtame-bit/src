import camry from "../assets/images/camry.jpg";
import corolla from "../assets/images/corolla.jpg";
import rav4 from "../assets/images/rav4.jpg";
import highlander from "../assets/images/highlander.jpg";
import supra from "../assets/images/supra.jpg";

const carData = [
  {
    model: "Toyota Camry",
    image: camry,
    parts: ["Brake Pads", "Oil Filter", "Air Filter", "Spark Plugs", "Battery"]
  },
  {
    model: "Toyota Corolla",
    image: corolla,
    parts: ["Clutch Kit", "Timing Belt", "Radiator", "Fuel Pump", "Headlights"]
  },
  {
    model: "Toyota RAV4",
    image: rav4,
    parts: ["Shock Absorbers", "Alternator", "Control Arms", "Wheel Bearings", "Exhaust"]
  },
  {
    model: "Toyota Highlander",
    image: highlander,
    parts: ["Transmission Fluid", "Power Steering Pump", "CV Axle", "Oxygen Sensor", "Starter Motor"]
  },
  {
    model: "Toyota Supra",
    image: supra,
    parts: ["Turbocharger", "Performance Brakes", "Cold Air Intake", "ECU Module", "Performance Exhaust"]
  }
];

export default carData;
