import { useState } from "react";

const DegreeChange = ({ degree, setDegree }) => {
  const [units, setUnits] = useState("°C");

  const converter = () => {
    if (degree == "metric") {
      setDegree("imperial");
      setUnits("°C");
    } else {
      setDegree("metric");
      setUnits("°F");
    }
  };
  return (
    <div className="button">
      <button className="customizedButton" onClick={converter}>
        {" "}
        Cambiar a {units}
      </button>
    </div>
  );
};

export default DegreeChange;
