import React from 'react';

const Suggestions = () => {
    return (
        <div className='suggestions'>
            <h2>Une idée de thème pour le mois prochain ?</h2>
            <p>Fais nous part de tes idées de sujets, l’une d’entre elle sera peut être retenue pour le quizz du mois prochain</p>
            <input type="text" />
            <button>Soumettre l'idée</button>
        </div>
    );
};

export default Suggestions;