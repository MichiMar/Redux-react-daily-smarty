import React, { Component } from 'react';

import Logo from './logo'
import RecentPosts from './recentPosts';
import SearchBar from './searchBar';

// import { connect } from 'react-redux';
// import * as actions from '../actions';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}

// export default connect(null, actions) (Home)