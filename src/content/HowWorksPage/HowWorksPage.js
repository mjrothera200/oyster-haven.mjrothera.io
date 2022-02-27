import React from 'react';
import { Component } from 'react';

import { Breadcrumb, BreadcrumbItem, Tabs, Tab } from 'carbon-components-react';
import StoryBook from '../../components/StoryBook'

class HowWorksPage extends Component {
  state = {
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Lifecycle methods
  componentDidMount() {
    console.log('About Page mounted');

  }

  componentWillUnmount() {
    console.log('About Page unmounted');
  }

  render() {
    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">About the Oyster Reef</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Oyster Haven</h1>
          </div>
        </div>
        <div className="bx--row about-page__r3">
          <div className="bx--col">
            <Tabs scrollIntoView={false}>
              <Tab href="#" id="architecture" label="Architecture">
              <StoryBook
                  contenturl="content/howworks-architecture.json"
                />
              </Tab>
              <Tab href="#" id="davis" label="Weather Station">
                <StoryBook
                  contenturl="content/howworks-davis.json"
                />
              </Tab>
              <Tab href="#" id="pendant" label="Temp Logger">
                <StoryBook
                  contenturl="content/howworks-templogger.json"
                />
              </Tab>
              <Tab href="#" id="lora" label="Lora Modbus">
                <StoryBook
                  contenturl="content/howworks-lora.json"
                />
              </Tab>
              <Tab href="#" id="lora" label="Helium">
                <StoryBook
                  contenturl="content/howworks-helium.json"
                />
              </Tab>
          </Tabs>
        </div>
      </div>
      </div >
    );
  }
}

export default HowWorksPage;
