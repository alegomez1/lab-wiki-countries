import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import countries from "../countries";
import CountryDetail from "../components/CountryDetail";

class App extends Component {
  state={
    allCountries:countries
  }
  render() {
    let all = countries.map(each => (
      <div>
        <Link to={`/country/${each.cca3}/${each.name.official}/${each.area}/${each.capital}`}>{each.name.official}</Link>
      </div>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-6">
            {/* Div that shows all the countries */}
            <div className="list-of-countries">{all}</div>
          </div>
          <div className="col-6">
            <h2>Country Details</h2>
            <Switch>
              <Route path='/country/:cca3/:name/:area/:capital' component={CountryDetail}/>
            </Switch>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
