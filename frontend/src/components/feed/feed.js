import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';


class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-wrapper">
        <NavbarContainer />
      </div>
    )
  }
}

export default Feed;