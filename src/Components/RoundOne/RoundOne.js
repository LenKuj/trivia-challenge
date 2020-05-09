import React from 'react';
import Answer from '../Answers/Answers';
import { Link } from 'react-router-dom';
//import '../../styles.css';


class RoundOne extends React.Component {

    state = {

        title: 'Round 1 - General Knowledge',
        data: [],
        allAnswers: [],
        correctAnswers: 0
    }

    componentDidMount = () => {

      
      return fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`)
        .then((response) => (response.json())
        .then(questions => {
            const myquestions = questions.results;
         
            this.setState({
                data: myquestions
            })
          })
      )     
    }

    render(){

    return (
    <div className="App">
      <h1>{this.state.title}</h1>
      
       { <div>
        {
          this.state.data.map( (data, index) => {
           
          return <div className="card"> 
                      <h2> {data.question}</h2> 
                     <Answer key={index} id={index} rightAnswer={data.correct_answer} answer={data.incorrect_answers} 
                      />
                 </div>
          })
         }
        </div> }
        <Link to="roundtwo">Start second Round</Link>
    </div>
  );
 }
}

export default RoundOne;
