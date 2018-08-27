import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

import {Add} from './components/Add'
import { News } from './components/News'
import newsData from './data/newsData' // импорт по дефолту



class App extends React.Component {

    state = {
        news: newsData
    };

    handleAddNews = (data) => {
        data.id = this.state.news.length + 1;
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews})
    };


    render() {
        return (
            <React.Fragment>
                <h3>Новости</h3>
                <News data={this.state.news}/>
                <Add onAddNews={this.handleAddNews}/>
            </React.Fragment>
        )
    }
}


export default App;
