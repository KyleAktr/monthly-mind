import React from 'react';

const Results = ({ goodAnswerCount }) => {

    const percentGoodAnswer = (goodAnswerCount / 8)  * 100

    return (
        <div>
            <h2>Results</h2>
            <p>Nombre de bonnes réponses : {goodAnswerCount}</p>
            <p>Pourcentage de bonne réponses : {percentGoodAnswer}</p>
        </div>
    );
};

export default Results;