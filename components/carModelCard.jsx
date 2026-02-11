import { useState } from "react";

export default function CarModelCard({ model, image, parts }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={image}
        alt={model}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h2>{model}</h2>

      {open && (
        <ul>
          {parts.map((part, index) => (
            <li key={index}>{part}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
