import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Results from "./components/Results";
import Article from "./components/Article";

const App = () => {
  const [goodAnswerCount, setGoodAnswerCount] = useState(0);
  const [displayNone, setDisplayNone] = useState(false);

  const scrollNone = document.querySelector(".scroll-none");

  useEffect(() => {
    if (displayNone) {
      document.body.style.overflow = "auto";
      scrollNone.style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [displayNone]);

  return (
    <div className="page">
      <div className="scroll-none">
        <Home />
        <Questions
          goodAnswerCount={goodAnswerCount}
          setGoodAnswerCount={setGoodAnswerCount}
        />

        <Results
          goodAnswerCount={goodAnswerCount}
          setDisplayNone={setDisplayNone}
        />
      </div>
      <div className="article-container">
        <Article />
      </div>
    </div>
  );
};

export default App;
