import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import ConnectPotContainer from '../connections/connect_pot_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let placeholder = ["Leo", "Martin", "Bentley", "Bijou", "Petunia", "Uni", "Mouse", "Mochi"];
    return (
      <div className="feed-wrapper">
        <NavbarContainer/>
        <div>
          <div>
            <ConnectPotContainer names={placeholder} />
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;