import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const Suggestions = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    
        emailjs
          .sendForm(
            "service_ci059ig",
            "template_oa694sa",
            form.current,
            process.env.REACT_APP_ID
          )
          .then(
            form.current.reset(),
            alert(
              "Merci pour ta suggestion, reviens le mois prochain pour voir si elle a étée choisie ! :)"
            )
          );
      };

  return (
    <div className="suggestions">
      <h2>Une idée de thème pour le mois prochain ?</h2>
      <p>
        Fais nous part de tes idées de sujets, l’une d’entre elle sera peut être
        retenue pour le quizz du mois prochain
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="suggestion" />
        <button type="submit">Soumettre l'idée</button>
      </form>
    </div>
  );
};

export default Suggestions;
