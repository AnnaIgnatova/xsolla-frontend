import './App.css';
import React from 'react';
import Cities from './components/select/Cities.js';
import Monthes from './components/select/Monthes';
import Cards from './components/cards/Cards';

const SAVED_ITEM = 'saved';
const DEFAULT_CITY = 'Amsterdam';
const DEFAULT_MONTH = 'February';

const requestURL =
  'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      city: DEFAULT_CITY,
      month: DEFAULT_MONTH,
      saved: JSON.parse(localStorage.getItem(SAVED_ITEM))
        ? JSON.parse(localStorage.getItem(SAVED_ITEM))
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
      if (obj.id === id) {
        obj.value = value;
        isFound = true;
      }
    });

    if (!isFound) savedArr.push({ id, value });

    this.setState({ saved: savedArr });
    localStorage.setItem(SAVED_ITEM, JSON.stringify(savedArr));
  };

  getDataFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem(SAVED_ITEM))) {
      this.setState({ saved: JSON.parse(localStorage.getItem(SAVED_ITEM)) });
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
