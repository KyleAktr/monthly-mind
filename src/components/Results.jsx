import React, { useEffect, useState } from "react";
import Arrow from "../style/assets/img/arrow-down-solid.svg"
import { Link } from "react-scroll";

const Results = ({ goodAnswerCount}) => {
  const percentGoodAnswer = (goodAnswerCount / 8) * 100;
  const [resultsBackground, setResultsBackground] = useState('#9EC591')
  const [congratsText, setCongratsText] = useState("Bravo ! 🤓")

  useEffect(() => {
    if (goodAnswerCount < 5) {
      setResultsBackground('#c59191')
      setCongratsText("Pas terrible.. Rensigne toi dans l'article ⬇️ puis repasse le quiz 🙂")
    } else {
      setResultsBackground('#9EC591')
      setCongratsText("Bravo ! 🤓")
    }

  }, [goodAnswerCount])

  


  return (
    <div className="results-container">
      <div className="results-card-container">
        <h2>Résultats</h2>
        <div className="results-card">
          <div className="results" style={{background : resultsBackground}}>
            <div className="results-stats">
                <p>Nombre de bonnes réponses : {goodAnswerCount}/8</p>
                <p>Pourcentage de bonne réponses : {percentGoodAnswer}%</p>
                <p className="congrats">{congratsText}</p>
            </div>
          </div>
        </div>
        <div className="show-article">
            <p>Retrouve toutes les réponses dans l’article ci dessous </p>
            <Link to="article" spy={true} smooth={true} offset={50} duration={500}>
            <img className="arrow" src={Arrow} alt=""/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
