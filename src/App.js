import React, { useState } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import Article from "./components/Article";

const App = () => {
  const [goodAnswerCount, setGoodAnswerCount] = useState(0);

  return (
    <div>
      <Home />
      <Questions
        goodAnswerCount={goodAnswerCount}
        setGoodAnswerCount={setGoodAnswerCount}
      />

      <Results goodAnswerCount={goodAnswerCount} />
      <Article />
    </div>
  );
};

export default App;
