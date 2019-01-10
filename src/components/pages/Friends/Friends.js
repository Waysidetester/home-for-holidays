import React from 'react';
import './Friends.scss';

class Friends extends React.Component {
  render() {
    const selectedFriendPath = (e) => {
      e.preventDefault();
      const selectedId = e.currentTarget.id;
      this.props.history.push(`friends/${selectedId}/edit`);
    };

    return (
      <div>
        Friends
        <button
        className='btn btn-primary'
        id='12345'
        onClick={selectedFriendPath}
        >
          Load Friend Path
        </button>
      </div>
    );
  }
}

export default Friends;
