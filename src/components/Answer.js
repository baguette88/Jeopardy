import React, { Component } from "react";

export default class Answer extends Component {
  render() {
    return (
      <div className="Answer">
        <h1>Answer: What is {this.props.question.answer}? </h1>
      </div>
    );
  }
}
