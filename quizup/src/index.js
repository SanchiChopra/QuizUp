import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";

class QuizUp extends Component {

    state = {
        questionBank: []    //this (local state) is where those 5 questions will be stores once they are pulled in from the API
    }
    render() {
        return(
            <div className = "container">
                <div className = "title">
                    QuizUp 
                </div>
            </div>
        );
    }
}

ReactDOM.render(<QuizUp />, document.getElementById("root"));