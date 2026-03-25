import React from "react";
import Main from "./components/Main";

function App() {
  const cardsData = [
    {
      title: "Гори",
      description: "Красиві гірські пейзажі",
      image: "https://picsum.photos/300/200?1"
    },
    {
      title: "Море",
      description: "Спокійне синє море",
      image: "https://picsum.photos/300/200?2"
    },
    {
      title: "Ліс",
      description: "Зелений густий ліс",
      image: "https://picsum.photos/300/200?3"
    }
  ];

  return (
    <div>
      <h1>Мої картки</h1>
      <Main data={cardsData} />
    </div>
  );
}

export default App;