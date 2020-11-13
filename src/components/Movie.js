import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.movie.Title}</h1>
        <h2>Year: {this.props.movie.Year}</h2>
        <img src={this.props.movie.Poster} />
        <h3>Genre: {this.props.movie.Genre}</h3>
        <h4>Plot: {this.props.movie.Plot}</h4>
      </div>
    );
  }
}
