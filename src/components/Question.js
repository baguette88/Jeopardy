import React, { Component } from "react";

export default class Question extends Component {
  render() {
    return (
      <div className="Question">
        <h1>Question: {this.props.question.question} </h1>
        <h1>Answer: What is {this.props.question.answer}? </h1>
        {/* <h2>Category: {this.props.question.category} </h2>

     <h3>Value: {this.props.question.value}</h3> */}
        <h4>Airdate: {this.props.question.airdate}</h4>
        <h1>Difficulty: {this.props.question.value}</h1>{" "}
        <button Increment> Score</button> <button>Decrement Score</button>
        <h4>Category: {this.props.question.category.title}</h4>
        <h4>ID: {this.props.question.id}</h4>
      </div>
    );
  }
}
