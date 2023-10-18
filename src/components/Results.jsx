import React from 'react';

const Results = ({ goodAnswerCount }) => {

    return (
        <div>
            <h2>Results</h2>
            <p>Nombre de bonnes réponses : {goodAnswerCount}</p>
        </div>
    );
};

export default Results;