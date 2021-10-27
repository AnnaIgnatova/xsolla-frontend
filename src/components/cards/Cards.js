import React from 'react';
import './cards.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  saveCard(e) {
    if (e.target.className.baseVal === 'event-save-icon') {
      e.target.children[0].className.baseVal =
        e.target.children[0].className.baseVal === 'no-fill'
          ? 'active'
          : 'no-fill';
    } else {
      e.target.className.baseVal =
        e.target.className.baseVal === 'no-fill' ? 'active' : 'no-fill';
    }
  }

  createCard(date, name, img) {
    let day = date.split('.')[0];
    return (
      <div
        className="card-event"
        style={{ backgroundImage: `url(${img})` }}
        key={`${name}-${date}`}
      >
        <div className="event-month">{day}</div>
        <span>{name}</span>
        <svg
          onClick={this.saveCard}
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="event-save-icon"
        >
          <path
            className="no-fill"
            d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  createAllCards(city, month) {
    return this.props.events.map((event) => {
      let date = new Date(
        Date.UTC(2021, +String(event.date).split('.')[1] - 1, 10)
      );
      let eventMonth = date.toLocaleDateString('en-US', {
        month: 'long',
      });
      if (event.city === city && month === eventMonth) {
        return this.createCard(event.date, event.name, event.image);
      } else return;
    });
  }

  render() {
    return (
      <div className="cards-container">
        {this.createAllCards(this.props.city, this.props.month)}
      </div>
    );
  }
}

export default Cards;
