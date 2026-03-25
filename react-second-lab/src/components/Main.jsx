import React from "react";
import Card from "./Card/Card";

const Main = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Main;