import React from 'react';
import './cards.css';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  saveCard = (e) => {
    let targetElement;
    let targetParentId;

    if (e.target.className.baseVal === 'event-save-icon') {
      targetElement = e.target.children[0].className.baseVal;
      targetParentId = e.target.parentNode.id;
    } else {
      targetElement = e.target.className.baseVal;
      targetParentId = e.target.parentNode.parentNode.id;
    }

    if (targetElement === 'no-fill' || targetElement === 'undefined') {
      targetElement = 'active';
      this.props.updateSaved(targetParentId, 'active');
    } else {
      targetElement = 'no-fill';
      this.props.updateSaved(targetParentId, 'no-fill');
    }
  };

  createCard(id, date, name, img) {
    let day = date.split('.')[0];
    let saveType;

    this.props.savedCards.forEach((obj) => {
      if (obj.id === id) {
        saveType = obj.value;
      }
    });

    return (
      <div
        className="card-event"
        style={{ backgroundImage: `url(${img})` }}
        key={id}
        id={id}
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
            className={`${saveType}`}
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
        return this.createCard(event.id, event.date, event.name, event.image);
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
