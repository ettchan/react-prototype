import React from 'react';
import {render} from 'react-dom';
import Menu from './components/menu.jsx'
import Navigation from './navigation/nav.jsx'

class App extends React.Component {
    render () {
        return <div>
            <div className="nav"><Navigation/> </div>
            <div><Menu/></div>
        </div>
    }
}

render(<App/>, document.getElementById('app'));