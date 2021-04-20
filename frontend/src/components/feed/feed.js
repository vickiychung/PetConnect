import React from 'react';

import "./feed.css"
import NavbarContainer from '../navbar/navbar_container';
import ConnectPotContainer from '../connections/connect_pot_container';

class Feed extends React.Component {


  render() {

    return (
      <div className="feed-wrapper">
        <NavbarContainer/>
        <div>
          <div>
            <ConnectPotContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;