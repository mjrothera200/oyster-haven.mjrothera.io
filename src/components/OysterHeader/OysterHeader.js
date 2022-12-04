import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  WatsonHealthAiStatus20
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const OysterHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Oyster Haven">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="">
          Oyster Haven
        </HeaderName>
        <HeaderNavigation aria-label="Oyster Haven">
          <HeaderMenuItem element={Link} to="/trends">
            Trends
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/about">
            About the Oysters
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/howworks">
            How This Site Works
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/">Home</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/trends">Trends</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/about">About the Oysters</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/howworks">How it Works</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Monitoring Health">
            <WatsonHealthAiStatus20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default OysterHeader;
