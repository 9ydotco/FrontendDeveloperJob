// Copyright 2018, 9Y Media Group GmbH
// Zirkusgasse 13/2b
// 1020 Vienna, Austria

import React, { Component } from 'react';
import logo from './9Y-Logo.svg';
import './App.css';

class JobOffer extends React.Component {
  constructor(props) {
    super(props); this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>9yards is hiring</h1>
          <h2>React Frontend Developer (m/f)</h2>
        </header>
        <p className="Main-text">
          <b>We are</b> a Vienna based App and Web development agency. Our company is led by programmers, not managers and our guiding principles are: Create awesome software and have fun on the way; Dont do what everyone else does;  Mistakes are opportunities to learn; Constant improvement is key.
        </p>
        <p className="Main-text">
          <YourResponsibilities />
          <WeOffer />
          <YouBring />
        </p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="new-application">
              What are you waiting for?
            </label>
          </p>
          <p>
            <button class="button">I am interested!</button>
          </p>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    window.location.href = `mailto:hello@9yards.at`;
  }
}

class YourResponsibilities extends React.Component {
  render() {
    return (
      <div>
        <h3>Your Responsibilities</h3>
        <ul>
          <li>Develop  modern web solutions based on design mockups</li>
          <li>Understand business needs and user behaviour, and propose UI/UX improvement</li>
          <li>Write clean & modular code</li>
          <li>Follow modern web best practices</li>
          <li>Test for cross-browser, cross-platform compatibility</li>
        </ul>
      </div>
    );
  }
}

class WeOffer extends React.Component {
  render() {
    return (
      <div>
        <h3>We offer</h3>
        <ul>
          <li>Fulltime employment</li>
          <li>Flat company structure with a lot of room to take part in key decisions</li>
          <li>Flexible work times and the possibility to work from home</li>
          <li>Competitive salary, depending on your experiences. Starting from annual: 34.000,- Brutto </li>
          <li>Strong focus on learning and growth, and exploring new technologies</li>
          <li>Work in a team with very competent guys</li>
        </ul>
      </div>
    );
  }
}

class YouBring extends React.Component {
  render() {
    return (
      <div>
        <h3>You bring</h3>
        <ul>
          <li>Experiences with the React framework</li>
          <li>Strong experience in HTML5, CSS, Javascript</li>
          <li>Motivated to learn React Native and dig into some areas of mobile app development</li>
          <li>Social competence and capable to work in a team</li>
          <li>Backend development skills are a plus</li>
        </ul>
      </div>
    );
  }
}
export default JobOffer;
