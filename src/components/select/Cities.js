import React from 'react';
import './select.css';

class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  createSelectOptions() {
    let filterCities = this.props.cities
      .sort()
      .filter((city, index, arr) => arr.lastIndexOf(city) === index);

    return filterCities.map((city, index) => {
      return (
        <option value={city} key={`${city}-${index}`}>
          {city}
        </option>
      );
    });
  }

  changeCity(e) {
    this.props.updateCity(e.target.value);
  }

  render() {
    return (
      <select onChange={(e) => this.changeCity(e)} className="select-city">
        {this.createSelectOptions()}
      </select>
    );
  }
}

export default Cities;
