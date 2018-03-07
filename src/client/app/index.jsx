import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <div className="test"><p> Hello React Project</p></div>;
    }
}

render(<App/>, document.getElementById('app'));