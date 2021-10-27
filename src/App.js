import './App.css';
import React from 'react';
import Cities from './components/select/Cities.js';
import Monthes from './components/select/Monthes';
import Cards from './components/cards/Cards';

const requestURL =
  'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      city: 'Amsterdam',
      month: 'February',
      saved: JSON.parse(localStorage.getItem('saved'))
        ? JSON.parse(localStorage.getItem('saved'))
        : [],
    };
  }

  fetchEvents = () => {
    this.setState({ ...this.state });
    fetch(requestURL)
      .then((response) => response.json())
      .then((result) => this.setState({ events: result }))
      .catch((e) => console.log(e));
  };

  componentDidMount() {
    this.fetchEvents();
  }

  getCities() {
    return this.state.events.map((event) => event.city);
  }
  getMonthes() {
    return this.state.events.map((event) => {
      return String(event.date).split('.')[1];
    });
  }

  updateMonth = (month) => {
    this.setState({ month: month });
  };

  updateCity = (city) => {
    this.setState({ city: city });
  };

  updateSaved = (id, value) => {
    let savedArr = [...this.state.saved];
    let isFound = false;
    savedArr.forEach((obj) => {
      if (obj.id === id && obj.value !== value) {
        obj.value = value;
      }
      if (obj.id === id) isFound = true;
    });

    if (!isFound) savedArr.push({ id, value });

    this.setState({ saved: savedArr });
    localStorage.setItem('saved', JSON.stringify(savedArr));
  };

  getDataFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('saved'))) {
      this.setState({ saved: JSON.parse(localStorage.getItem('saved')) });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="events-container">
          <h1>Event Listing</h1>
          <div className="event-info">
            <span className="city-title">City:</span>
            <Cities cities={this.getCities()} updateCity={this.updateCity} />
            <span>Month:</span>
            <Monthes
              monthes={this.getMonthes()}
              updateMonth={this.updateMonth}
            />
          </div>
          <Cards
            events={this.state.events}
            city={this.state.city}
            month={this.state.month}
            updateSaved={this.updateSaved}
            savedCards={this.state.saved}
          />
        </div>
      </div>
    );
  }
}

export default App;
