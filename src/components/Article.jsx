import React from "react";
import Galaxy from "../style/assets/img/galaxy.webp";
import Jupiter from "../style/assets/img/jupiter.webp";
import Venus from "../style/assets/img/venus.webp";
import GanymedeMoons from "../style/assets/img/Ganymede_moons.webp";
import Saturne from "../style/assets/img/Saturne.webp";
import Spaceman from "../style/assets/img/spaceman.webp";
import Suggestions from "./Suggestions";

const Article = () => {
  return (
    <div className="article-page">
      <div className="article">
        <div className="article-container">
          <div className="article-title">
            <h2>"Balade à Vaisseau" - Un Voyage Dans Notre Système Solaire</h2>
          </div>
          <div className="article-intro">
            <p>
              Embarquez pour une exploration fascinante de notre système solaire
              et découvrez les merveilles qui composent notre voisinage
              cosmique. Au cours de cette aventure, nous explorerons certains
              des joyaux célestes qui peuplent notre univers.
            </p>
            <div className="article-intro-img">
              <img src={Galaxy} alt="image de notre système solaire" />
              <img
                className="galaxy-img"
                src={Spaceman}
                alt="image d'un astronaute près de la terre"
              />
            </div>
          </div>
          <div className="article-content">
            <h3>Planètes Géantes et Planètes Sœurs</h3>
            <div className="article-content-1">
              <p className="article-jutiter">
                Jupiter, la plus grande planète de notre système solaire, est
                une destination incontournable, avec sa célèbre Grande Tache
                Rouge. Juste pour préciser, sa tache rouge est égal à la
                circonférence de la Terre.
                <br /> <br />
                Mars, la "planète rouge," est un autre point de mire, offrant un
                paysage accidenté.
              </p>
              <div className="jupiter-img">
                <img
                  src={Jupiter}
                  alt="image de Jupiter et de sa tache rouge"
                />
                <p>Jupiter et sa tâche rouge</p>
              </div>
              <p className="article-venus">
                Vénus, surnommée "la sœur de la Terre," partage des
                caractéristiques intrigantes avec notre planète, notamment une
                taille similaire, une composition rocheuse, et une atmosphère
                dense. Cependant, elle se distingue par un climat extrême, avec
                des températures de surface brûlantes et une atmosphère riche en
                dioxyde de carbone, créant un effet de serre dévastateur. Ses
                vents supersoniques et ses nuages d'acide sulfurique ajoutent à
                son mystère.
              </p>
              <div className="venus-img">
                <img src={Venus} alt="image de Venus" />
                <p>Vénus, "la soeur de la Terre"</p>
              </div>
            </div>
            <h3>Lunes et Anneaux Énigmatiques</h3>
            <div className="article-content-2">
              <p className="article-ganymede">
                Explorons les mystères de Ganymède, la plus grande lune du
                système solaire, surpassant même Mercure en taille. Cette lune
                galiléenne de Jupiter présente une géologie complexe avec des
                cratères, des plaines et des sillons. La possibilité d'un océan
                souterrain sous sa surface glacée suscite un vif intérêt, tout
                comme son interaction avec le champ magnétique de Jupiter,
                créant des phénomènes magnétiques fascinants. Ganymède demeure
                une destination d'exploration essentielle pour les chercheurs
                spatiaux.
              </p>
                <div className="ganymede-earth-img">
              <img
                src={GanymedeMoons}
                alt="image de Ganymede, de la terre et de sa lune"
              />
              <p>Les plus grandes lunes de notre système solaire</p>
              </div>
              <p className="article-saturne">
                Saturne, avec son système d'anneaux spectaculaires composés de
                milliards de particules de glace et de roche, nous offre un
                spectacle splendide. Ces lunes et anneaux ajoutent une dimension
                de beauté et de mystère à l'exploration de notre système
                solaire.
              </p>
              <div className="saturne-img">
              <img
                src={Saturne}
                alt="image de Saturne"
              />
              <p>Saturne et son système d'anneaux</p>
              </div>
              <p className="article-conclusion">
                Notre voyage nous a menés sur des planètes géantes telles que
                Jupiter, avec sa Grande Tache Rouge, Mars, la mystérieuse
                "planète rouge," et Vénus, notre fascinante "sœur de la Terre."
                Nous avons exploré les merveilles de Ganymède, la plus grande
                lune du système solaire, et les anneaux magnifiques de Saturne.
                Ces destinations ont révélé une multitude de secrets et de
                beautés, de la géologie complexe de Ganymède à la majesté des
                anneaux de Saturne.
                <br /> <br />
                Mais notre système solaire est encore rempli de mystères à
                dévoiler. Des lunes inexplorées aux profondeurs de l'espace,
                l’exploration continue ! Ça donne envie de s'y intéresser, non ?
                🚀🌌🪐
              </p>
            </div>
          </div>
        </div>
      </div>
      <Suggestions />
    </div>
  );
};

export default Article;
