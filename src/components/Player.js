import React, {Component} from 'react';

class Player extends Component {
  render() {
    return (
      <div>{this.props.match.params.number}</div>
    );
  }
}

export default Player;