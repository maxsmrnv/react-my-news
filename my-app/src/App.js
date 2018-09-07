import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

import {Add} from './components/Add'
import {News} from './components/News'
import newsData from './data/newsData' // импорт по дефолту


class App extends React.Component {

    state = {
        // news: newsData
        news: null,
        isLoading: false
    };


    static getDerivedStateFromProps(props, state) {

        let nextFilteredNews

        if (Array.isArray(state.news)) {
            nextFilteredNews = [...state.news]
            nextFilteredNews.forEach((item,index) => {
                if (item.bigText.toLocaleLowerCase().indexOf('pbug') !==-1){
                    item.bigText = 'SPAM'
                }
            })

        }
        return { // возвращаем новое состояние
            filteredNews: nextFilteredNews,
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:3000/data/newsData.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(this);
                console.log('приехали данные ', data);
                setTimeout(() => {
                    this.setState({ isLoading: false, news: data })
                }, 1000)
            });

    }

    handleAddNews = (data) => {
        data.id = new Date().getTime();
        const nextNews = [data, ...this.state.news];
        this.setState({news: nextNews})
    };


    render() {
        const {news, isLoading} = this.state;
        return (
            <React.Fragment>
                <Add onAddNews={this.handleAddNews}/>
                <h3>Новости</h3>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(news) && <News data={news}/>}
            </React.Fragment>
        )
    }
}


export default App;
