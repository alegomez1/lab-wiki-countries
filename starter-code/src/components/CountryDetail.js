import React, { Component } from "react";

class CountryDetail extends Component {
  render() {
    console.log("Props====>", this.props);
    console.log("Match====>", this.props.match);

    return (
      <div>
        <h1>{this.props.match.params.name}</h1>
        <h4>Capital: {this.props.match.params.capital}</h4>
        <h4>Area: {this.props.match.params.area}</h4>
        <h4>Borders: {this.props.match.params.name}</h4>
      </div>
    );
  }
}

export default CountryDetail;
