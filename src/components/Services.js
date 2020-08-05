import React, { Component } from "react";
import Title from "./Title";
import { FaShuttleVan, FaBeer, FaHiking, FaCocktail } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "There are many variations of passages of Lorem Ipsum available",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "There are many variations of passages of Lorem Ipsum available",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "There are many variations of passages of Lorem Ipsum available",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "There are many variations of passages of Lorem Ipsum available",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        {this.state.services.map((item, index) => (
          <article className="service" key={index}>
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </section>
    );
  }
}
