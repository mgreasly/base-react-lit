import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import {mapToProps, actions } from '../store/store';
import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.initStore();
    }

    render() {
        return (
        <div className="c App">
            The app starts here...
        </div>
    );
}
}

export default connect(mapToProps, actions)(App);;



