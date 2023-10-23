import React from "react";
import Arrow from "../style/assets/img/arrow-down-solid.svg"
import { Link } from "react-scroll";

const Results = ({ goodAnswerCount }) => {
  const percentGoodAnswer = (goodAnswerCount / 8) * 100;

  return (
    <div className="results-container">
      <div className="results-card-container">
        <h2>Résultats</h2>
        <div className="results-card">
          <div className="results">
            <div className="results-stats">
                <p>Nombre de bonnes réponses : {goodAnswerCount}/8</p>
                <p>Pourcentage de bonne réponses : {percentGoodAnswer}%</p>
                <p className="congrats">Bravo !!!</p>
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
