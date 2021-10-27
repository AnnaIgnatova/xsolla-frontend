import React from 'react';
import './select.css';

class Monthes extends React.Component {
  constructor(props) {
    super(props);
  }

  createMonthesOptions() {
    let filterMonthes = this.props.monthes
      .sort()
      .filter((month, index, arr) => arr.lastIndexOf(month) === index);

    let transformedMonthes = filterMonthes.map((month) => {
      let date = new Date(Date.UTC(2021, month - 1, 10));
      return date.toLocaleDateString('en-US', {
        month: 'long',
      });
    });

    return transformedMonthes.map((month) => {
      return <option value={month} key={month}>{month}</option>;
    });
  }

  changeMonth(e) {
    this.props.updateMonth(e.target.value);
  }

  render() {
    return (
      <select onChange={(e) => this.changeMonth(e)}>
        {this.createMonthesOptions()}
      </select>
    );
  }
}

export default Monthes;
