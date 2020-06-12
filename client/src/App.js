import React from "react";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import MemoryCard from "./components/MemoryCard";
import bobaFett from "./images/boba-fett.png";
import c3po from "./images/c3po.png";
import chewbacca from "./images/chewbacca.png";

// use react State to create click listner method on each card passed into Container
// use State to track times that a card has been clicked
// create method to handle reset of cards once a card has been clicked twice
// create method to render images in a different order for interactivity

function App() {
  return (
    <Container>
      <Jumbotron />
      <MemoryCard image={bobaFett} />
      <MemoryCard image={chewbacca} />
      <MemoryCard image={c3po} />
    </Container>
  );
}

export default App;
