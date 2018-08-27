import React from 'react';
import PropTypes from 'prop-types'


class Article extends React.Component {
    state = {
        visible: false,
    }
    handleReadMoreClck = (e) => {
        e.preventDefault()
        this.setState({visible: !this.state.visible})
    }

    render() {
        const {author, title, bigText} = this.props.data
        const {visible} = this.state
        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{title}</p>
                {
                    !(visible) &&
                    <a onClick={this.handleReadMoreClck} href="#readmore" className='news__readmore'>Подробнее</a>
                }
                {
                    (visible) &&
                    <React.Fragment>
                        <a onClick={this.handleReadMoreClck} href="#readmore" className='news__readmore'>Скрыть</a>
                        <p className='news__big-text'>{bigText}</p>
                    </React.Fragment>
                }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}


export { Article }
