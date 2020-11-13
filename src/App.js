import React, { Component } from "react";
import Question from "./components/Question.js";
import Header from "./components/Header.js";
// import Answer from "./components/Answer.js";
import "./App.css";
// let scoreDisplay = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // baseURL: "http://jservice.io/api/random",
      // // apikey: "apikey=" + "6253ae12",
      // query: "&t=",
      // questionId: "",
      // searchURL: "",
      question: {},
    };
    // console.log(question);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomQuestion = this.getRandomQuestion.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  getRandomQuestion() {
    fetch("http://jservice.io/api/random")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json[0]);
        console.log(this.state.question);
        this.setState({
          question: json[0],
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          // this.state.apikey +
          this.state.query,
        // + this.state.questionTitle,
      },
      () => {
        console.log(this.state.searchURL);
        // fetch("http://jservice.io/api/random")
        //   .then((response) => {
        //     return response.json();
        //   })
        //   .then((json) => {
        //     console.log(json[0]);
        //     this.setState({
        //       question: json[0],
        //     });
        //   });
      }
    );
  }
  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // };

  render() {
    return (
      <div>
        <Header></Header>
        <br />
        <button onClick={this.getRandomQuestion}>Random Question</button>
        {this.state.question ? <Question question={this.state.question} /> : ""}
        {/* <button onClick={increment}> Increment </button> */}
        <br />
      </div>
    );
  }
}
