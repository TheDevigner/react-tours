import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.state;
    const filtredTours = tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({
      tours: filtredTours
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tour-list">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
