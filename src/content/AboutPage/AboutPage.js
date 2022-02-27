import React from 'react';
import { Component } from 'react';
import StoryBook from '../../components/StoryBook'

import { Breadcrumb, BreadcrumbItem, Tabs, Tab } from 'carbon-components-react';

class AboutPage extends Component {
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
      <div className="bx--grid bx--grid--full-width about-page">
        <div className="bx--row about-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">About the Oyster Reef</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="about-page__heading">Oyster Haven</h1>
          </div>
        </div>
        <div className="bx--row about-page__r3">
          <div className="bx--col">
            <Tabs >
              <Tab id="where" label="History">
                <StoryBook
                  contenturl="content/about-why.json"
                />
              </Tab>
              <Tab id="why" label="Oyster Gardening">
                <StoryBook
                  contenturl="content/about-process.json"
                />
              </Tab>
              <Tab id="process" label="Oyster Sensitivity">
                <StoryBook
                  contenturl="content/about-sensitivity.json"
                />
              </Tab>
              <Tab id="involve" label="The Vision">
                <StoryBook
                  contenturl="content/about-vision.json"
                />
              </Tab>
              <Tab id="float" label="Connected Float">
                <StoryBook
                  contenturl="content/about-float.json"
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
