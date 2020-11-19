import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class QuizUp extends Component {

    state = {
        questionBank: [], //this (local state) is where those 5 questions will be stores once they are pulled in from the API
        score: 0,
        responses: 0
    };
    getQuestions = () => {   //invokes quizService API and populates the questionBAnk state var with results
        quizService().then( question  => {
            this.setState({    //used to update the state variable, never write to a state var directly, update it this way by setState
                questionBank: question
            });
        });
    };

    //we need a way to run this function once this component loads up, hence componentDidMount

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer) {
            this.setState({
                score: this.state.score+1
            });
        }
        this.setState({
            responses: this.state.responses<5 ? this.state.responses+1 : 5
        });
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    }
    componentDidMount() {    //lifecycle mthod
        this.getQuestions();
    }
    render() {
        return(
            <div className = "container">
                <div className = "title">
                    QuizUp 
                </div>
                {/* rendering data inside curly braces, first check if questionBank has any data to render, it will 
                    attempt to render only if there is any data.
                    
                    Map function destructures the question objects and it will return back a set fo H4 tags with a question text. */}
                {this.state.questionBank.length >0 && 
                this.state.responses<5 &&
                this.state.questionBank.map(
                    ({question,answers, correct, questionId}) => (
                        <QuestionBox 
                        question={question} 
                        options={answers} 
                        key={questionId} 
                        selected={answer => this.computeAnswer(answer, correct)} />
                        //rendering instances of QuestionBox component, where we pass down 2 props namely question: 
                        //which will be dynamically bound to the questions text and options which will carry an answers 
                        //array for us to render buttons.
                        //key property is essential when rendering lists as it helps react identify and correlate 
                        //instance of a component with the data it consumes
                    )
                )}
                {this.state.responses === 5 ? (
                <Result score={this.state.score} playAgain={this.playAgain} />
                ) : null}
            </div>
        );
    }
}

ReactDOM.render(<QuizUp />, document.getElementById("root"));