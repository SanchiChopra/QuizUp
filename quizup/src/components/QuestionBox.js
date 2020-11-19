//this component will render the Question text as well as buttons for the user to answer the question
//this component demonstrates a function component, which do not provide state management features, unlike a class component

import React from "react";

//no class created, a function that brings in props using a single argument

const QuestionBox =({question, options}) => {
    return(
        <div className="questionBox">
            <div className="question"> {question} </div>
        </div>
    );
};

export default QuestionBox;