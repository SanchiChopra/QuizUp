/* This component will render the Question text as well as buttons for the user to answer the question
this component demonstrates a function component, which do not provide state management features, 
unlike a class component. We don't need also such features in a component that simply display data 
and provide interaction features. */

import React, { useState } from "react";

//no class created, a function that brings in props using a single argument

const QuestionBox =({question, options, selected}) => {

    /*question and options arrays are 2 props, answer is a state variable created using useState function and we set the
    initial value of answer from the options array. 
    setAnswer function is used to update the value of the answer variable. */

    const [answer, setAnswer] = useState(options);
    return(
        <div className="questionBox">
            <div className="question"> {question} </div>
            { /*rendering a series of buttons */} 
            
            {answer.map((text, index) => (
                <button key={index} className="answerBtn" onClick = {() => {
                    setAnswer([text]);
                    selected(text);
                }}>
                    {text}
                </button>
                 /* ideally, use a unique value which will never be muted, for role of key attribute. */
            ))}
        </div>
    );
};

export default QuestionBox;