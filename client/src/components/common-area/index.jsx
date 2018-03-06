import React from 'react';
import Todos from './todos.jsx';

class CommonArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    console.log('common area did mount');
  }
  render() {
    return (
      <div>
        <h1>Common Area</h1>
        <div>
          <Todos />
        </div>
        {/* chat */}
      </div>
    );
  }
}

export default CommonArea;
