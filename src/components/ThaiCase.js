import React from "react"
import "../style.css"


class ThaiCase extends React.Component {
  state = {
    cases: [],
    recovered: [],
    deaths: []
  };

  componentDidMount() {
    fetch(
      "https://covid-19-data.p.rapidapi.com/country?format=undefined&name=thailand",
      {
        method: "GET",

        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "21405851d4msh4bfffcddce18db8p1c9cb7jsn2e581bd3953d"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          cases: data[0].confirmed,
          recovered: data[0].recovered,
          deaths: data[0].deaths
        });
        console.log(Math.floor(data[0].confirmed));
      });
  }

  render() {
    return (
      <div className="number">
        <div className="div1">
          <p>ผู้ติดเชื้อทั้งโลก: </p>
          <p style={{ fontWeight: "bold" }}>TOTAL CASES </p>
          
        </div>
        <div className="div7">
          <p>ผู้ติดเชื้อในไทย: </p>
          <p style={{ fontWeight: "bold" }}>CASES IN THAILAND</p>
          {this.state.cases}
        </div>
        <div className="div2">
          <p>เสียชีวิต: </p>
          <p style={{ fontWeight: "bold" }}>DECEASED </p>
          {this.state.deaths}
        </div>
        <div className="div3">
          <p>รักษาหาย: </p>
          <p style={{ fontWeight: "bold" }}>RECOVERED </p>
          {this.state.recovered}
        </div>
      </div>
    );
  }
}

export default ThaiCase;
