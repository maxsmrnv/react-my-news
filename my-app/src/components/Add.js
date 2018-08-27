import React from 'react';
import PropTypes from 'prop-types'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }

    state = {
        name: '',
        textNews: '',
        title: '',
        checkRule: false
    };

    componentDidMount() {
        this.input.current.focus()
    }

    onBtnClickHandler = (e) => {
        e.preventDefault()
        const {name: author, title, textNews: bigText} = this.state;
        this.props.onAddNews({author, title, bigText})
    }


    handleChange = (e) => {
        const {id, value} = e.currentTarget
        this.setState({[id]: value})
    }


    handleRuleCheck = (e) => {
        this.setState({checkRule: e.currentTarget.checked})
    }

    validate = () => {
        const {textNews, title, name, checkRule} = this.state;
        return (name.trim() && title.trim() && textNews.trim() && checkRule) ? false : true


    }

    render() {

        const {name, title, textNews} = this.state;

        return <form className='add'>
            <input
                id="name"
                ref={this.input}
                type='text'
                className='add__author'
                placeholder='Ваше имя'
                value={name}
                onChange={this.handleChange}
            />
            <input
                id="title"
                ref={this.input}
                type='text'
                className='add__author'
                placeholder='Заголовок'
                value={title}
                onChange={this.handleChange}
            />
            <textarea
                id="textNews"
                className='add__text'
                placeholder='Текст новости'
                value={textNews}
                onChange={this.handleChange}>
                    </textarea>
            <label className='add__checkrule'>
                <input
                    onChange={this.handleRuleCheck}
                    type='checkbox'/> Я согласен с правилами
            </label>
            <button
                disabled={this.validate()}
                className='add__btn'
                onClick={this.onBtnClickHandler}>
                Показать alert
            </button>
        </form>
    }
}


export {Add};
